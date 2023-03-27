import { TagDto } from "../../dto";
import { tagsRepository } from "../../repositories";

const tagsBusiness = {
  create: (data: TagDto) => {
    return tagsRepository.create(data);
  },
};
export default tagsBusiness;
