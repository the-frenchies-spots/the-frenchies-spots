import Tag from '../../models/tag';
import { TagDto } from '../../dto';
import { Prisma } from '@prisma/client';

const tagsRepository = {
getAll: (filterData: Prisma.TagWhereInput, searchValue: string) => {
  return Tag.findMany({
    where: {
      ...filterData,
      name: {
        contains: searchValue
      }
    },
  })
},

  create: (data: TagDto) => {
    return Tag.create({
      data: {
        ...data
      }
    });
  },

  delete: (tagId: string) => {
    return Tag.delete({
      where: {
        id: tagId
      }
    }).then(() => true).catch((err) => {
      console.log(err);
      return false
    });
  },

  // update: (
  //   data: TagDto,
  //   tagId: string,
  //   spot: Pick<SpotDto, "tagsIds">,
  // ) => {
  //   return Tag.update({
  //     where: {
  //       id: tagId
  //     },
  //     data: {
  //       ...data,
  //       spot: {

  //       }
  //     }
  //     include: { spot: true }
  //   });
  // },

  // createTagsList: (data: TagDto[]) => {
  //   return Tag.createMany({
  //     data: data
  //   });
  // }
};

export default tagsRepository;
