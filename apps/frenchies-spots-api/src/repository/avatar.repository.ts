import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { plainToClass } from '../utils/plain-to-class';
import { AvatarInput } from '../dto/input/avatar/avatar.input';
import { ProfileEntity } from '../entity/profile.entity';

@Injectable()
export class AvatarRepository {
  constructor(private prisma: PrismaService) {}

  async buy(
    avatarInput: AvatarInput,
    newPoints: number,
    profileId: string,
  ): Promise<ProfileEntity> {
    const profile = await this.prisma.profile.update({
      where: { id: profileId },
      data: {
        gamePoint: newPoints,
        avatars: {
          create: {
            avatar: {
              connect: { id: avatarInput.avatarId },
            },
          },
        },
      },
    });
    return plainToClass(profile, ProfileEntity);
  }
}
