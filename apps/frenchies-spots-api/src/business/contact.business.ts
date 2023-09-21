import { Injectable } from '@nestjs/common';
import { ContactsInput } from '../dto/input/contact/contacts.input';

import { ContactEntity } from '../entity/contact.entity';
import { ContactRepository } from '../repository/contact.repository';
import { extractArray } from '../utils/extract-array';
import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';
import { ContactInput } from '../dto/input/contact/contact.input';

const { INTERNAL_SERVER_ERROR } = codeErrors;

@Injectable()
export class ContactBusiness {
  constructor(private contactRepository: ContactRepository) {}

  async connectAllContacts(profileIds: string[]): Promise<boolean> {
    profileIds.forEach(async (currentId) => {
      const currentParticipantIds = extractArray(currentId, profileIds);
      const contactConnected = await this.contactRepository.connectContacts(
        currentId,
        currentParticipantIds,
      );
      if (!contactConnected) throw new ErrorService(INTERNAL_SERVER_ERROR);
    });

    return true;
  }

  async getAll(
    profileId: string,
    contactsInput: ContactsInput,
  ): Promise<ContactEntity[]> {
    return this.contactRepository.getAll(profileId, contactsInput);
  }

  async update(contactInput: ContactInput): Promise<ContactEntity> {
    return this.contactRepository.updateOne(contactInput);
  }

  async acceptFriend(profileId: string, contactId: string): Promise<boolean> {
    const isContactFriend = await this.contactRepository.updateByContact(
      profileId,
      contactId,
      { isFriend: true },
    );

    const isProfileFriend = await this.contactRepository.updateByContact(
      contactId,
      profileId,
      { isFriend: true },
    );

    return !!isContactFriend && !!isProfileFriend;
  }
}
