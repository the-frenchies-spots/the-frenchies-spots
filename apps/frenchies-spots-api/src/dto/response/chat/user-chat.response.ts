import { Field, ObjectType } from '@nestjs/graphql';
import { ChatEntity } from '../../../entity/chat.entity';

@ObjectType()
export class ContChatMessage {
  @Field()
  chatMessages: number;
}

@ObjectType()
export class UserChatResponse extends ChatEntity {
  @Field(() => ContChatMessage)
  _count: ContChatMessage;
}
