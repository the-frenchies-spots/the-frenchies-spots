import GraphQLJSON from 'graphql-type-json';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContentInput {
  @Field({ nullable: true })
  value?: string;
}

@InputType()
export class SendNotifInput {
  @Field()
  profileId: string;

  @Field()
  profileSenderId: string;

  @Field(() => GraphQLJSON, { nullable: true })
  content?: ContentInput;

  @Field()
  type: string;
}
