import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { SpotRepository } from 'src/repository/spot.repository';
import { FavoriteResolver } from 'src/resolver/favorite.resolver';
import { FavoriteBusiness } from 'src/business/favorite.business';
import { FavoriteRepository } from 'src/repository/favorite.repository';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';

@Module({
  providers: [
    FavoriteResolver,
    FavoriteBusiness,
    FavoriteRepository,
    SpotRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class FavoriteModule {}
