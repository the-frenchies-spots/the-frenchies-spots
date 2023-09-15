import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { SpotSchema } from '../schema/spot.shema';
import { TokenService } from '../service/token.service';
import { SpotResolver } from '../resolver/spot.resolver';
import { SpotBusiness } from '../business/spot.business';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { SpotRepository } from '../repository/spot.repository';
import { CloudinaryService } from '../service/cloudinary.service';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { SpotGeospatialService } from '../service/spot-geospatial.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Spot', schema: SpotSchema }])],
  providers: [
    SpotResolver,
    SpotBusiness,
    SpotRepository,
    JwtService,
    TokenService,
    PrismaService,
    CloudinaryService,
    SpotGeospatialService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class SpotModule {}
