import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from '../service/token.service';
import { PrismaService } from '../service/prisma.service';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { PublicTokenStrategy } from '../strategy/publicToken.strategy';
import { RefreshTokenStrategy } from '../strategy/refreshToken.strategy';
import { ChatBusiness } from '../business/chat.business';
import { ChatResolver } from '../resolver/chat.resolver';
import { ChatRepository } from '../repository/chat.repository';
import { ContactRepository } from '../repository/contact.repository';
import { NotificationBusiness } from '../business/notification.business';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationResolver } from '../resolver/notification.resolver';
import { ContactBusiness } from '../business/contact.business';

@Module({
  providers: [
    ChatResolver,
    ChatBusiness,
    ChatRepository,
    ContactRepository,
    ContactBusiness,
    NotificationBusiness,
    NotificationRepository,
    NotificationResolver,
    JwtService,
    TokenService,
    PrismaService,
    PublicTokenGuard,
    PublicTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class SocketModule {}
