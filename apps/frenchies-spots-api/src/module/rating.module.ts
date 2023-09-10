import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { RatingBusiness } from 'src/business/rating.business';
import { RatingResolver } from 'src/resolver/rating.resolver';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { SpotRepository } from 'src/repository/spot.repository';
import { RatingRepository } from 'src/repository/rating.repository';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';

@Module({
  providers: [
    RatingResolver,
    RatingBusiness,
    SpotRepository,
    RatingRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class RatingModule {}
