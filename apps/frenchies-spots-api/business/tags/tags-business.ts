import { TagDto } from '../../dto';
import { tagsRepository } from '../../repositories';

const tagsBusiness = {
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
