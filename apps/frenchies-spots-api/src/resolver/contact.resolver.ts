import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ContactEntity } from '../entity/contact.entity';
import { ContactBusiness } from '../business/contact.business';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { ContactsInput } from '../dto/input/contact/contacts.input';
import { ContactInput } from '../dto/input/contact/contact.input';

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

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Boolean)
  acceptFriendContact(
    @Args('contactId') contactId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<boolean> {
    return this.contactBusiness.acceptFriend(profileId, contactId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ContactEntity)
  updateContact(
    @Args('contactsInput') contactsInput: ContactInput,
  ): Promise<ContactEntity> {
    return this.contactBusiness.update(contactsInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Boolean)
  blockContact(
    @Args('blockContactId') blockContactId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<boolean> {
    return this.contactBusiness.block(profileId, blockContactId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Boolean)
  unBlockContact(
    @Args('blockContactId') blockContactId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<boolean> {
    return this.contactBusiness.unBlock(profileId, blockContactId);
  }
}
