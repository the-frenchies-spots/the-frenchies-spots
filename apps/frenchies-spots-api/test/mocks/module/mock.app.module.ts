import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { MockSpotModule } from './mock.spot.module';
import { AuthModule } from '../../../src/module/auth.module';
import { UserModule } from '../../../src/module/user.module';
import { RatingModule } from '../../../src/module/rating.module';
import { FavoriteModule } from '../../../src/module/favorite.module';
import { TagModule } from '../../../src/module/tag.module';
import { SocketModule } from '../../../src/module/socket.module';
import { ContactModule } from '../../../src/module/contact.module';
import { PictureModule } from '../../../src/module/picture.module';
import { AvatarModule } from '../../../src/module/avatar.module';
import { MockProfileModule } from './mock.profile.module';
import { PrismaService } from '../../../src/service/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    MockSpotModule,
    UserModule,
    TagModule,
    MockProfileModule,
    RatingModule,
    FavoriteModule,
    SocketModule,
    ContactModule,
    PictureModule,
    AvatarModule,
  ],
  providers: [PrismaService],
})
export class MockAppModule {}
