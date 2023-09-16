import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { SpotRepository } from '../repository/spot.repository';
import { FavoriteResolver } from '../resolver/favorite.resolver';
import { FavoriteBusiness } from '../business/favorite.business';
import { FavoriteRepository } from '../repository/favorite.repository';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';

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
