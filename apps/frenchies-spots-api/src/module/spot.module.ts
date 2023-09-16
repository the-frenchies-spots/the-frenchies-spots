import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { SpotSchema } from 'src/schema/spot.shema';
import { TokenService } from 'src/service/token.service';
import { SpotResolver } from 'src/resolver/spot.resolver';
import { SpotBusiness } from 'src/business/spot.business';
import { PrismaService } from 'src/service/prisma.service';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { SpotRepository } from 'src/repository/spot.repository';
import { CloudinaryService } from 'src/service/cloudinary.service';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';
import { GeospatialService } from 'src/service/spot-geospatial.service';
import { ProfileSchema } from 'src/schema/profile.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Spot', schema: SpotSchema },
      { name: 'Profile', schema: ProfileSchema },
    ]),
  ],
  providers: [
    SpotResolver,
    SpotBusiness,
    SpotRepository,
    JwtService,
    TokenService,
    PrismaService,
    CloudinaryService,
    GeospatialService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class SpotModule {}
