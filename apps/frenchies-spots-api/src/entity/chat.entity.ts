import { ObjectType, Field } from '@nestjs/graphql';
import { ProfileChatEntity } from './profile-chat.entity';
import { ChatMessageEntity } from './chat-message.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Chat')
export class ChatEntity {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [ProfileChatEntity], { nullable: true })
  participants: ProfileChatEntity[];

  @Field(() => [ChatMessageEntity], { nullable: true })
  chatMessages: ChatMessageEntity[];

  @Field({ nullable: true })
  isTemporary: boolean;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
