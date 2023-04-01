import Tag from "../../models/tag";
import { TagDto, TagFilterDto, TagUpdateDto } from "../../dto";

const tagsRepository = {
  getAll: (filterData: TagFilterDto, searchValue: string) => {
    const { category } = filterData;
    return Tag.findMany({
      where: {
        category,
        id: {
          in: filterData.ids,
        },
        name: {
          contains: searchValue,
        },
      },
    });
  },

  create: (data: TagDto) => {
    return Tag.create({
      data: {
        ...data,
      },
    });
  },

  update: (data: TagUpdateDto) => {
    return Tag.update({
      where: {
        id: data.id,
      },
      data: {
        tagPictureUrl: data.tagPictureUrl,
      },
    });
  },

  delete: (tagId: string) => {
    return Tag.delete({
      where: {
        id: tagId,
      },
    })
      .then(() => true)
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
};

export default tagsRepository;
