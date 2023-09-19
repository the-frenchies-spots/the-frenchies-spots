import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ChatBusiness } from '../business/chat.business';
import { ChatEntity } from '../entity/chat.entity';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';

import { InserChatInput } from '../dto/input/chat/insert-chat.input';
import { CurrentUserId } from '../decorator/currentUserId.decorator';

import { ChatMessageEntity } from '../entity/chat-message.entity';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { UserChatResponse } from '../dto/response/chat/user-chat.response';

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(private readonly chatBusiness: ChatBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => [UserChatResponse])
  chats(@CurrentUserId() userId: string): Promise<UserChatResponse[]> {
    return this.chatBusiness.chats(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Query(() => ChatEntity)
  chatByPk(
    @Args('chatId') chatId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.getByPk(chatId, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Query(() => Int)
  chatMessagesNotRead(@CurrentUserId() userId: string): Promise<number> {
    return this.chatBusiness.messagesNotRead(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ChatEntity)
  insertChat(
    @Args('inserChatInput') inserChatInput: InserChatInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.insertChat(profileId, inserChatInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ChatMessageEntity)
  sendChatMessage(
    @Args('sendChatMessageInput') sendChatMessageInput: SendChatMessageInput,
  ): Promise<ChatMessageEntity> {
    return this.chatBusiness.sendMessage(sendChatMessageInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Boolean)
  markChatMessageAsRead(
    @CurrentUserId() userId: string,
    @Args('chatId') chatId: string,
  ): Promise<boolean> {
    return this.chatBusiness.markMessageAsRead(userId, chatId);
  }
}
