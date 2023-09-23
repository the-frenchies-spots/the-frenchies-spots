import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { AvatarRepository } from '../repository/avatar.repository';
import { AvatarBusiness } from '../business/avatar.business';
import { AvatarResolver } from '../resolver/avatar.resolver';
import { ProfileRepository } from '../repository/profile.repository';

@Module({
  providers: [
    AvatarResolver,
    AvatarBusiness,
    AvatarRepository,
    ProfileRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AvatarModule {}
