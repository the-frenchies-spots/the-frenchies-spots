import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class InserChatInput {
  @IsString({ each: true })
  @Field(() => [String])
  participantIds: string[];
}
