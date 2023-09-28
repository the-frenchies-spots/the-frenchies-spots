import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class TagInput {
  @IsString()
  @Field()
  id: string;
}
