import { Injectable } from '@nestjs/common';

import { PrismaService } from '../service/prisma.service';
import { ContactEntity } from '../entity/contact.entity';
import { ContactsInput } from '../dto/input/contact/contacts.input';
import { plainToClassMany } from '../utils/plain-to-class';

@Injectable()
export class ContactRepository {
  constructor(private prisma: PrismaService) {}

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
      include: { contact: true, profile: true },
    });
    return plainToClassMany(contacts, ContactEntity);
  }

  async connectContacts(
    profileId: string,
    participantIds: string[],
  ): Promise<boolean> {
    return this.prisma.profile
      .update({
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
      })
      .then(() => true)
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
