import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/service/token.service';
import { PrismaService } from 'src/service/prisma.service';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { PublicTokenStrategy } from 'src/strategy/publicToken.strategy';
import { RefreshTokenStrategy } from 'src/strategy/refreshToken.strategy';
import { ChatBusiness } from 'src/business/chat.business';
import { ChatResolver } from 'src/resolver/chat.resolver';
import { ChatRepository } from 'src/repository/chat.repository';
import { ChatGateway } from 'src/gateway/chat.gateway';
import { ContactRepository } from 'src/repository/contact.repository';

@Module({
  providers: [
    ChatResolver,
    ChatBusiness,
    ChatRepository,
    ContactRepository,
    ChatGateway,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class ChatModule {}
