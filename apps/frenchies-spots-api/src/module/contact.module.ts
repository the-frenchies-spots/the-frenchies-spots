import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { ContactRepository } from '../repository/contact.repository';
import { ContactBusiness } from '../business/contact.business';
import { ContactResolver } from '../resolver/contact.resolver';

@Module({
  providers: [
    ContactResolver,
    ContactBusiness,
    ContactRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class ContactModule {}
