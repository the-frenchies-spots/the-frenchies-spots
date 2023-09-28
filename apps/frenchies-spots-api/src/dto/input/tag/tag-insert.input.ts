import { Field, InputType } from '@nestjs/graphql';
import { CategoriesSpotAndTag } from '../../../entity/categories-spot-and-tag.enum';
import { IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class TagInsertInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  name: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  tagPictureUrl: string;

  @Field({ nullable: true })
  category: CategoriesSpotAndTag;
}
