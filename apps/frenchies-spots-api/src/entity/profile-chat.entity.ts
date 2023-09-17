import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';
import { ChatEntity } from './chat.entity';
import { ChatMessageEntity } from './chat-message.entity';

@ObjectType()
export class ProfileChatEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ProfileEntity)
  profile: ProfileEntity;

  @Field()
  profileId: string;

  @Field(() => ChatEntity)
  chat: ChatEntity;

  @Field()
  chatId: string;

  // Assuming ChatMessage type is defined similarly

  @Field(() => [ChatMessageEntity])
  chatMessages: ChatMessageEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
