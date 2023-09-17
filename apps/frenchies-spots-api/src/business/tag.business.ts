import { Injectable } from '@nestjs/common';

import { TagRepository } from '../repository/tag.repository';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { TagEntity } from '../entity/tag.entity';
import { TagInsertInput } from '../dto/input/tag/tag-insert.input';
import { TagUpdateInput } from '../dto/input/tag/tag-update.input';
import { DeleteResponse } from '../dto/response/delete.response';


@Injectable()
export class TagBusiness {
  constructor(private tagRepository: TagRepository) {}

  async getAll(tagListInput: TagListInput): Promise<TagEntity[]> {
    return this.tagRepository.getAll(tagListInput);
  }

  async getById(id: string): Promise<TagEntity> {
    return this.tagRepository.getById(id);
  }

  async insert(tagInsertInput: TagInsertInput): Promise<TagEntity> {
    return this.tagRepository.create(tagInsertInput);
  }

  async update(tagUpdateInput: TagUpdateInput): Promise<TagEntity> {
    return this.tagRepository.update(tagUpdateInput);
  }

  async delete(id: string): Promise<DeleteResponse> {
    const deleted = await this.tagRepository.delete(id);
    return { deleted };
  }
}
