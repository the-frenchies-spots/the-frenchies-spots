import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { RatingBusiness } from '../business/rating.business';
import { RatingResolver } from '../resolver/rating.resolver';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { SpotRepository } from '../repository/spot.repository';
import { RatingRepository } from '../repository/rating.repository';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';

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
