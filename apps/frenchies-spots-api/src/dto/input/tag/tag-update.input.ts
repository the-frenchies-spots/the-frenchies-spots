import { Field, InputType } from '@nestjs/graphql';
import { IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class TagUpdateInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  id: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  tagPictureUrl: string;
}
