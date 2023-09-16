import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { StripeService } from 'src/service/stripe.service';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { ProfileResolver } from 'src/resolver/Profile.resolver';

import { AuthRepository } from 'src/repository/auth.repository';
import { ProfileBusiness } from 'src/business/profile.business';
import { ProfileRepository } from 'src/repository/Profile.repository';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';
import { GeospatialService } from 'src/service/spot-geospatial.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotSchema } from 'src/schema/spot.shema';
import { ProfileSchema } from 'src/schema/profile.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Spot', schema: SpotSchema },
      { name: 'Profile', schema: ProfileSchema },
    ]),
  ],
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
    GeospatialService,
  ],
})
export class ProfileModule {}
