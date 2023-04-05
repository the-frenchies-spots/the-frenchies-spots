import { tagsBusiness } from "../../business";
import { ReadTagDto } from "../../dto";

export const tagsQuery = {
  tags: (_: undefined, data: ReadTagDto) => {
    return tagsBusiness.getAll(data);
  },

  tag: (_: undefined, data: { id: string }) => {
    return tagsBusiness.getById(data.id);
  },
};
