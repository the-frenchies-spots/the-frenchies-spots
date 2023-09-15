import { ObjectType, Field } from '@nestjs/graphql';
import { ProfileChatEntity } from './profile-chat.entity';
import { ChatMessageEntity } from './chat-message.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Chat')
export class ChatEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [ProfileChatEntity])
  participants: ProfileChatEntity[];

  @Field(() => [ChatMessageEntity])
  chatMessages: ChatMessageEntity[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
