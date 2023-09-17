import { Injectable } from '@nestjs/common';

import { PrismaService } from '../service/prisma.service';
import { plainToClass, plainToClassMany } from '../utils/plain-to-class';
import { ChatEntity } from '../entity/chat.entity';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from '../entity/chat-message.entity';

@Injectable()
export class ChatRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string): Promise<ChatEntity[]> {
    const chat = await this.prisma.chat.findMany({
      where: {
        participants: {
          some: {
            profile: {
              userId,
            },
          },
        },
      },
      include: {
        participants: { include: { profile: true } },
        chatMessages: true,
      },
    });
    return plainToClassMany(chat, ChatEntity);
  }

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
