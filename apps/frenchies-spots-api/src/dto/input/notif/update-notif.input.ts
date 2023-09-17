import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateNotifInput {
  @Field(() => [String])
  ids: string[];
}
