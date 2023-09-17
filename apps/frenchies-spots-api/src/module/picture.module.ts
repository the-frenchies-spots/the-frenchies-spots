import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { PictureResolver } from '../resolver/picture.resolver';
import { PictureBusiness } from '../business/picture.business';
import { CloudinaryService } from '../service/cloudinary.service';

@Module({
  providers: [
    PictureResolver,
    PictureBusiness,
    CloudinaryService,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class PictureModule {}
