import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { StripeService } from 'src/service/stripe.service';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { ProfileResolver } from 'src/resolver/Profile.resolver';

import { AuthRepository } from 'src/repository/auth.repository';
import { ProfileRepository } from 'src/repository/Profile.repository';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';
import { ProfileBusiness } from 'src/business/profile.business';

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
