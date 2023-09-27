import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { StripeService } from '../service/stripe.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { ProfileResolver } from '../resolver/profile.resolver';

import { AuthRepository } from '../repository/auth.repository';
import { ProfileBusiness } from '../business/profile.business';
import { ProfileRepository } from '../repository/profile.repository';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { GeospatialService } from '../service/spot-geospatial.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotSchema } from '../schema/spot.shema';
import { ProfileSchema } from '../schema/profile.shema';
import { ContactBusiness } from '../business/contact.business';
import { ContactRepository } from '../repository/contact.repository';
import { NotificationBusiness } from '../business/notification.business';
import { NotificationRepository } from '../repository/notification.repository';

@Module({
  // imports: [
  //   MongooseModule.forFeature([
  //     { name: 'Spot', schema: SpotSchema },
  //     { name: 'Profile', schema: ProfileSchema },
  //   ]),
  // ],
  providers: [
    ProfileResolver,
    ProfileRepository,
    ProfileBusiness,
    ContactBusiness,
    ContactRepository,
    NotificationBusiness,
    NotificationRepository,
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
