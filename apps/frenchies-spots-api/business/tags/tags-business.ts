import { ReadTagDto, TagDto } from '../../dto';
import { tagsRepository } from '../../repositories';

const tagsBusiness = {
  getAll: (data: ReadTagDto) => {
    const {
      searchValue,
      ...other
    } = data;
    const filterData = { ...other };

    return tagsRepository.getAll(
      filterData,
      searchValue
    );
  },

  create: (data: TagDto) => {
    return tagsRepository.create(data);
  }, 

  delete: (tagId: string) => {
    return tagsRepository.delete(tagId);
  },

  // createTagsList: (data: TagDto[]) => {
  //   return tagsRepository.createTagsList(data);
  // }
};
export default tagsBusiness;
