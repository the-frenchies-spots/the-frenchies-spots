import { Injectable } from '@nestjs/common';

import { PrismaService } from '../service/prisma.service';
import { ContactEntity } from '../entity/contact.entity';
import { ContactsInput } from '../dto/input/contact/contacts.input';
import { plainToClass, plainToClassMany } from '../utils/plain-to-class';
import { Prisma } from '@prisma/client';
import { ContactInput } from '../dto/input/contact/contact.input';

@Injectable()
export class ContactRepository {
  constructor(private prisma: PrismaService) {}

  async getByContactId(
    profileId: string,
    contactId: string,
  ): Promise<ContactEntity> {
    const contact = await this.prisma.contact.findFirst({
      where: {
        profileId,
        contactId,
      },
    });
    return plainToClass(contact, ContactEntity);
  }

  async getAll(
    profileId: string,
    contactsInput: ContactsInput,
  ): Promise<ContactEntity[]> {
    const contacts = await this.prisma.contact.findMany({
      where: {
        profileId,
        isFriend: contactsInput?.isFriend,
        authorization: contactsInput?.authorization,
      },
      include: {
        contact: {
          include: {
            contacts: {
              where: {
                contactId: profileId,
              },
            },
            notifications: {
              where: {
                profileSenderId: profileId,
              },
            },
            profileChats: {
              where: {
                chat: {
                  participants: {
                    some: {
                      profileId,
                    },
                  },
                },
              },
              include: {
                chat: { include: { participants: true } },
              },
            },
          },
        },
        profile: true,
      },
    });
    return plainToClassMany(contacts, ContactEntity);
  }

  async connectContacts(
    profileId: string,
    participantIds: string[],
  ): Promise<boolean> {
    try {
      await this.prisma.profile.update({
        where: { id: profileId },
        data: {
          contacts: {
            create: participantIds.map((id) => {
              return {
                contact: {
                  connect: { id },
                },
              };
            }),
          },
        },
        include: { contacts: { include: { contact: true } } },
      });
      return true;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        console.log('La connexion existe déjà.');
        return true;
      } else {
        console.error(
          'Une erreur est survenue lors de la création de la connexion :',
          err,
        );
        return false;
      }
    }
  }

  async updateById(
    contactId: string,
    contactInput: ContactsInput,
  ): Promise<ContactEntity> {
    const contact = await this.prisma.contact.update({
      where: { id: contactId },
      data: contactInput,
    });
    return plainToClass(contact, ContactEntity);
  }

  async updateOne(contactInput: ContactInput): Promise<ContactEntity> {
    const { id, ...other } = contactInput;
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...other },
    });
    return plainToClass(contact, ContactEntity);
  }

  async block(profileId: string, blockContactId: string): Promise<boolean> {
    return this.prisma.profile
      .update({
        where: { id: profileId },
        data: {
          contacts: {
            update: {
              where: { id: blockContactId },
              data: {
                authorization: false,
              },
            },
          },
        },
      })
      .then(() => true)
      .catch(() => false);
  }

  async unBlock(profileId: string, blockContactId: string): Promise<boolean> {
    return this.prisma.profile
      .update({
        where: { id: profileId },
        data: {
          contacts: {
            update: {
              where: { id: blockContactId },
              data: {
                authorization: true,
              },
            },
          },
        },
      })
      .then(() => true)
      .catch(() => false);
  }
}
