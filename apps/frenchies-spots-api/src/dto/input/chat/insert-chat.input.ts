import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InserChatInput {
  @Field(() => [String])
  participantIds: string[];
}
