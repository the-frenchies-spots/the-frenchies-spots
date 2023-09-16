import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendChatMessageInput {
  @Field()
  chatId: string;

  @Field()
  profileChatId: string;

  @Field()
  message: string;
}
