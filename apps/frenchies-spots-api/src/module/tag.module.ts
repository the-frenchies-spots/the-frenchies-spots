import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TagResolver } from '../resolver/tag.resolver';
import { TagBusiness } from '../business/tag.business';
import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { TagRepository } from '../repository/tag.repository';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';

@Module({
  providers: [
    TagResolver,
    TagBusiness,
    TagRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class TagModule {}
