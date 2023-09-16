import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/service/prisma.service';
import { plainToClass } from 'src/utils/plain-to-class';
import { ChatEntity } from 'src/entity/chat.entity';
import { SendChatMessageInput } from 'src/dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from 'src/entity/chat-message.entity';

@Injectable()
export class ChatRepository {
  constructor(private prisma: PrismaService) {}

  async getById(chatId: string): Promise<ChatEntity> {
    const chat = await this.prisma.chat.findUnique({
      where: {
        id: chatId,
      },
      include: {
        participants: { include: { profile: true } },
        chatMessages: true,
      },
    });
    return plainToClass(chat, ChatEntity);
  }

  async createChat(
    profileId: string,
    participantIds: string[],
  ): Promise<ChatEntity> {
    const profiles = [profileId, ...participantIds];
    const chat = await this.prisma.chat.create({
      data: {
        participants: {
          create: profiles.map((id) => {
            return {
              profile: {
                connect: { id },
              },
            };
          }),
        },
      },
    });
    return plainToClass(chat, ChatEntity);
  }

  async sendMessage(
    sendChatMessageInput: SendChatMessageInput,
  ): Promise<ChatMessageEntity> {
    const chatMessage = await this.prisma.chatMessage.create({
      data: sendChatMessageInput,
    });
    return plainToClass(chatMessage, ChatMessageEntity);
  }
}
