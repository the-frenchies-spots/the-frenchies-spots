import { tagsBusiness } from '../../business';
import { TagDto } from '../../dto';
// import { tagsDataList } from '../../prisma/seed';

export const tagsMutation = {
  createTag: (_: undefined, data: TagDto) => {
    return tagsBusiness.create(data);
  }, 

  deleteTag: (_: undefined, data: { id: string }) => {
    const { id } = data;
    return tagsBusiness.delete(id);
  },

  // updateTag:() => {
  //   return "data";
  // },

  // createTagsList: () => {
  //   return tagsBusiness.createTagsList(tagsDataList);
  // }
};
