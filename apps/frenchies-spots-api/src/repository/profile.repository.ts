import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entity/user.entity';
import { plainToClass, plainToClassMany } from '../utils/plain-to-class';
import { PrismaService } from '../service/prisma.service';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { ProfileEntity } from '../entity/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async getById(friendId: string, profileId?: string): Promise<ProfileEntity> {
    const profile = await this.prisma.profile.findUnique({
      where: { id: friendId },
      include: {
        contacts: {
          where: {
            contactId: profileId,
          },
        },
        notifications: {
          where: {
            profileSenderId: profileId,
          },
        },
        profileChats: {
          where: {
            chat: {
              participants: {
                some: {
                  profileId,
                },
              },
            },
          },
          include: {
            chat: { include: { participants: true } },
          },
        },
      },
    });

    return plainToClass(profile, ProfileEntity);
  }

  async getAll(
    profileId: string | undefined,
    ids?: string[] | undefined,
  ): Promise<ProfileEntity[]> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        id: {
          in: ids?.filter((_profileId) => _profileId !== profileId),
        },
        AND: {
          isLocated: true,
        },
      },
      ...(profileId
        ? {
            include: {
              contacts: {
                where: {
                  contactId: profileId,
                },
              },
              notifications: {
                where: {
                  profileSenderId: profileId,
                },
              },
              profileChats: {
                where: {
                  chat: {
                    participants: {
                      some: {
                        profileId,
                      },
                    },
                  },
                },
                include: {
                  chat: { include: { participants: true } },
                },
              },
            },
          }
        : {}),
    });
    return plainToClassMany(profiles, ProfileEntity);
  }

  async update(
    profileInput: ProfileInput,
    userId: string,
  ): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { profile: { update: profileInput } },
      include: { profile: true },
    });

    return plainToClass(user, UserEntity);
  }
}
