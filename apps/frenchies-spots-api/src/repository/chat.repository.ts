import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/service/prisma.service';
import { plainToClass } from 'src/utils/plain-to-class';
import { ChatEntity } from 'src/entity/chat.entity';

@Injectable()
export class ChatRepository {
  constructor(private prisma: PrismaService) {}

  async insertChat(
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
}
