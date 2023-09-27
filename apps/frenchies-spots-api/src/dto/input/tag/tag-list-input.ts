import { Field, InputType } from '@nestjs/graphql';
import { CategoriesSpotAndTag } from '../../../entity/categories-spot-and-tag.enum';
import { IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class TagListInput {
  @IsString()
  @Field({ nullable: true })
  @ValidateIf(nullable)
  searchValue?: string;

  @IsString()
  @ValidateIf(nullable)
  @Field(() => [String], { nullable: true })
  ids?: string[];

  @Field({ nullable: true })
  category?: CategoriesSpotAndTag;
}
