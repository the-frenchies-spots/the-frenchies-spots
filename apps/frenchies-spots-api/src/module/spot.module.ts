import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../service/token.service';
import { SpotResolver } from '../resolver/spot.resolver';
import { SpotBusiness } from '../business/spot.business';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { SpotRepository } from '../repository/spot.repository';
import { CloudinaryService } from '../service/cloudinary.service';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { GeospatialService } from '../service/spot-geospatial.service';

@Module({
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
