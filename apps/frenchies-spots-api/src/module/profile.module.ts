import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { StripeService } from '../service/stripe.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { ProfileResolver } from '../resolver/profile.resolver';

import { AuthRepository } from '../repository/auth.repository';
import { ProfileRepository } from '../repository/profile.repository';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { ProfileBusiness } from '../business/profile.business';

@Module({
  providers: [
    ProfileResolver,
    ProfileRepository,
    ProfileBusiness,
    AuthRepository,
    JwtService,
    TokenService,
    StripeService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class ProfileModule {}
