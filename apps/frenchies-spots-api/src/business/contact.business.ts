import { Injectable } from '@nestjs/common';
import { ContactsInput } from '../dto/input/contact/contacts.input';

import { ContactEntity } from '../entity/contact.entity';
import { ContactRepository } from '../repository/contact.repository';

@Injectable()
export class ContactBusiness {
  constructor(private contactRepository: ContactRepository) {}

  async getAll(
    profileId: string,
    contactsInput: ContactsInput,
  ): Promise<ContactEntity[]> {
    return this.contactRepository.getAll(profileId, contactsInput);
  }
}
