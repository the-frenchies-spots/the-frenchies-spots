import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entity/user.entity';
import { plainToClass } from '../utils/plain-to-class';
import { PrismaService } from '../service/prisma.service';

@Injectable()
export class ProfileRepository {
  constructor(private prisma: PrismaService) {}

  async updateProfilePoint(
    userId: string,
    gamePoint: number,
  ): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { profile: { update: { gamePoint } } },
      include: { profile: true },
    });

    return plainToClass(user, UserEntity);
  }
}
