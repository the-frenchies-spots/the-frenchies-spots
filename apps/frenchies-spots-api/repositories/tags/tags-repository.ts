import Tag from "../../models/tag";
import { TagDto } from "../../dto";

const tagsRepository = {
  create: (data: TagDto) => {
    return Tag.create({
      data: {
        ...data,
      },
    });
  },
};

export default tagsRepository;
