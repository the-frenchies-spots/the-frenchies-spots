import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TagResolver } from 'src/resolver/tag.resolver';
import { TagBusiness } from 'src/business/tag.business';
import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { TagRepository } from 'src/repository/tag.repository';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';

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
