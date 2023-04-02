import { tagsBusiness } from "../../business";
import { TagDto, TagUpdateDto } from "../../dto";

export const tagsMutation = {
  createTag: (_: undefined, data: TagDto) => {
    return tagsBusiness.create(data);
  },

  updateTag: (_: undefined, data: TagUpdateDto) => {
    return tagsBusiness.update(data);
  },

  deleteTag: (_: undefined, data: { id: string }) => {
    const { id } = data;
    return tagsBusiness.delete(id);
  },
};
