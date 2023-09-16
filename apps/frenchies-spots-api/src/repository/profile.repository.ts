import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/entity/user.entity';
import { plainToClass, plainToClassMany } from 'src/utils/plain-to-class';
import { PrismaService } from 'src/service/prisma.service';
import { ProfileInput } from 'src/dto/input/profile/profile.input';
import { ProfileEntity } from 'src/entity/profile.entity';
import { ProfilesInput } from 'src/dto/input/profile/profiles.input';

@Injectable()
export class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(ids?: string[] | undefined): Promise<ProfileEntity[]> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        id: {
          in: ids,
        },
      },
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
