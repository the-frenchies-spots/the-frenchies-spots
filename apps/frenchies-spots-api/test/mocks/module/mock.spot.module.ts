import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SpotResolver } from '../../../src/resolver/spot.resolver';
import { SpotBusiness } from '../../../src/business/spot.business';
import { SpotRepository } from '../../../src/repository/spot.repository';
import { TokenService } from '../../../src/service/token.service';
import { PrismaService } from '../../../src/service/prisma.service';
import { CloudinaryService } from '../../../src/service/cloudinary.service';
import { PublicTokenGuard } from '../../../src/guard/publicToken.guard';
import { GeospatialService } from '../../../src/service/spot-geospatial.service';
import { PublicTokenStrategy } from '../../../src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../../../src/strategy/refreshToken.strategy';

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
export class MockSpotModule {}
