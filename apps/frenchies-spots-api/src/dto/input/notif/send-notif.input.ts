import GraphQLJSON from 'graphql-type-json';
import { Field, InputType } from '@nestjs/graphql';
import { IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class ContentInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  value?: string;
}

@InputType()
export class SendNotifInput {
  @IsString()
  @Field()
  profileId: string;

  @IsString()
  @Field()
  profileSenderId: string;

  @Field(() => GraphQLJSON, { nullable: true })
  content?: ContentInput;

  @IsString()
  @Field()
  type: string;
}
