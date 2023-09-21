import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContactInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  authorization?: boolean;

  @Field({ nullable: true })
  isFriend?: boolean;
}
