import { Field, InputType } from '@nestjs/graphql';
import { CategoriesSpotAndTag } from '../../../entity/categories-spot-and-tag.enum';

@InputType()
export class TagListInput {
  @Field({ nullable: true })
  searchValue?: string;

  @Field(() => [String], { nullable: true })
  ids?: string[];

  @Field({ nullable: true })
  category?: CategoriesSpotAndTag;
}
