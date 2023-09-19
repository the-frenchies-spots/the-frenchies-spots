import { ObjectType, Field } from '@nestjs/graphql';
import { ChatEntity } from './chat.entity';
import { ProfileChatEntity } from './profile-chat.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('ChatMessage')
export class ChatMessageEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ChatEntity)
  chat: ChatEntity;

  @Field()
  chatId: string;

  @Field(() => ProfileChatEntity)
  profileChat: ProfileChatEntity;

  @Field()
  profileChatId: string;

  @Field()
  isRead: boolean;

  @Field()
  message: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
