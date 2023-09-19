import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';
import { ChatEntity } from './chat.entity';
import { ChatMessageEntity } from './chat-message.entity';

@ObjectType()
export class ProfileChatEntity {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ProfileEntity, { nullable: true })
  profile: ProfileEntity;

  @Field({ nullable: true })
  profileId: string;

  @Field(() => ChatEntity, { nullable: true })
  chat: ChatEntity;

  @Field({ nullable: true })
  chatId: string;

  // Assuming ChatMessage type is defined similarly

  @Field(() => [ChatMessageEntity], { nullable: true })
  chatMessages: ChatMessageEntity[];

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
