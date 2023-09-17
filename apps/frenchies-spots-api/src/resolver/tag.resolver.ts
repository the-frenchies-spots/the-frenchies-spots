import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Public } from '../decorator/public.decorator';
import { TagEntity } from '../entity/tag.entity';
import { TagBusiness } from '../business/tag.business';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { TagInsertInput } from '../dto/input/tag/tag-insert.input';
import { TagUpdateInput } from '../dto/input/tag/tag-update.input';
import { DeleteResponse } from '../dto/response/delete.response';

@Resolver(() => TagEntity)
export class TagResolver {
  constructor(private readonly tagBusiness: TagBusiness) {}

  @Public()
  @Query(() => [TagEntity])
  tags(@Args('tagListInput') tagListInput: TagListInput): Promise<TagEntity[]> {
    return this.tagBusiness.getAll(tagListInput);
  }

  @Public()
  @Query(() => TagEntity)
  tagByPk(@Args('id') id: string): Promise<TagEntity> {
    return this.tagBusiness.getById(id);
  }

  @Public()
  @Mutation(() => TagEntity)
  insertTag(
    @Args('tagInsertInput') tagInsertInput: TagInsertInput,
  ): Promise<TagEntity> {
    return this.tagBusiness.insert(tagInsertInput);
  }

  @Public()
  @Mutation(() => TagEntity)
  updateTag(
    @Args('tagUpdateInput') tagUpdateInput: TagUpdateInput,
  ): Promise<TagEntity> {
    return this.tagBusiness.update(tagUpdateInput);
  }

  @Mutation(() => DeleteResponse)
  deleteTag(
    @Args('id')
    id: string,
  ): Promise<DeleteResponse> {
    return this.tagBusiness.delete(id);
  }
}
