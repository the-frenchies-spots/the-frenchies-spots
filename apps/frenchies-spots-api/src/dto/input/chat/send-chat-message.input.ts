import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class SendChatMessageInput {
  @IsString()
  @Field()
  chatId: string;

  @IsString()
  @Field()
  profileChatId: string;

  @IsString()
  @Field()
  message: string;
}
