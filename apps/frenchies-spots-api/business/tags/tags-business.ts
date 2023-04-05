import { ReadTagDto, TagDto, TagUpdateDto } from "../../dto";
import { tagsRepository } from "../../repositories";

const tagsBusiness = {
  getAll: (data: ReadTagDto) => {
    const { searchValue, ...other } = data;
    const filterData = { ...other };

    return tagsRepository.getAll(filterData, searchValue);
  },

  getById: (tagId: string) => {
    return tagsRepository.getById(tagId);
  },

  create: (data: TagDto) => {
    return tagsRepository.create(data);
  },

  update: (data: TagUpdateDto) => {
    return tagsRepository.update(data);
  },

  delete: (tagId: string) => {
    return tagsRepository.delete(tagId);
  },
};
export default tagsBusiness;
