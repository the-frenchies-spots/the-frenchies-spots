import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { PrismaService } from '../service/prisma.service';
import { TokenService } from '../service/token.service';
import { AuthResolver } from '../resolver/auth.resolver';
import { AuthBusiness } from '../business/auth.business';
import { AuthRepository } from '../repository/auth.repository';

import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-refresh' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('REFRESH_TOKEN_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthResolver,
    AuthBusiness,
    AuthRepository,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenStrategy,
    RefreshTokenStrategy,
    PublicTokenGuard,
    RefreshTokenGuard,
  ],
  exports: [
    PublicTokenGuard,
    RefreshTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
