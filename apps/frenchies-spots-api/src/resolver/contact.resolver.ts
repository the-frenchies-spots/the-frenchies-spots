import { Resolver, Query, Args } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ContactEntity } from '../entity/contact.entity';
import { ContactBusiness } from '../business/contact.business';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { ContactsInput } from '../dto/input/contact/contacts.input';

@Resolver(() => ContactEntity)
export class ContactResolver {
  constructor(private readonly contactBusiness: ContactBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => [ContactEntity])
  contacts(
    @Args('contactsInput') contactsInput: ContactsInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ContactEntity[]> {
    return this.contactBusiness.getAll(profileId, contactsInput);
  }
}
