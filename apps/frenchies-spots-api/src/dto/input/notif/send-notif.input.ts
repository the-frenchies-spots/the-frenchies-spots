import GraphQLJSON from 'graphql-type-json';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendNotifInput {
  @Field()
  profileId: string;

  @Field()
  isRead: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  content: Record<string, unknown>;

  @Field()
  type: string;

  @Field()
  subject: string;
}
