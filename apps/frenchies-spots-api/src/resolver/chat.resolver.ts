import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from 'src/guard/refreshToken.guard';
import { ChatBusiness } from 'src/business/chat.business';
import { ChatEntity } from 'src/entity/chat.entity';
import { CurrentProfileId } from 'src/decorator/currentProfileId.decorator.';

import { InserChatInput } from 'src/dto/input/chat/insert-chat.input';

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(private readonly chatBusiness: ChatBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => ChatEntity)
  chatByPk(
    @Args('chatId') chatId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.getByPk(chatId, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ChatEntity)
  insertChat(
    @Args('inserChatInput') inserChatInput: InserChatInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.insertChat(profileId, inserChatInput);
  }
}
