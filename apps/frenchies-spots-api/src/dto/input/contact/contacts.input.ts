import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContactsInput {
  @Field({ nullable: true })
  authorization?: boolean;

  @Field({ nullable: true })
  isFriend?: boolean;
}
