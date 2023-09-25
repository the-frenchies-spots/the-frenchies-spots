import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ProfileResolver } from '../../../src/resolver/profile.resolver';
import { ProfileRepository } from '../../../src/repository/profile.repository';
import { ProfileBusiness } from '../../../src/business/profile.business';
import { ContactBusiness } from '../../../src/business/contact.business';
import { ContactRepository } from '../../../src/repository/contact.repository';
import { NotificationBusiness } from '../../../src/business/notification.business';
import { NotificationRepository } from '../../../src/repository/notification.repository';
import { AuthRepository } from '../../../src/repository/auth.repository';
import { TokenService } from '../../../src/service/token.service';
import { PrismaService } from '../../../src/service/prisma.service';
import { StripeService } from '../../../src/service/stripe.service';
import { PublicTokenGuard } from '../../../src/guard/publicToken.guard';
import { RefreshTokenStrategy } from '../../../src/strategy/refreshToken.strategy';
import { PublicTokenStrategy } from '../../../src/strategy/publicToken.strategy';
import { GeospatialService } from '../../../src/service/spot-geospatial.service';

@Module({
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
export class MockProfileModule {}
