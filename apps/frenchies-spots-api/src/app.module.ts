import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaService } from './service/prisma.service';
import { AuthModule } from './module/auth.module';
import { UserModule } from './module/user.module';
import { SpotModule } from './module/spot.module';
import { ConfigModule } from '@nestjs/config';
import { RatingModule } from './module/rating.module';
import { FavoriteModule } from './module/favorite.module';
import { TagModule } from './module/tag.module';
import { ProfileModule } from './module/profile.module';
import { ChatModule } from './module/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return { req };
      },
      cors: {
        credentials: true,
        origin: process.env.FRONT_PROD_URL,
      },
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    SpotModule,
    UserModule,
    TagModule,
    ProfileModule,
    RatingModule,
    FavoriteModule,
    ChatModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
