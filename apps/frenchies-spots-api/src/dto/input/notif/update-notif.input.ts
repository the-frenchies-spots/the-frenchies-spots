import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateNotifInput {
  @IsString({ each: true })
  @Field(() => [String])
  ids: string[];
}
