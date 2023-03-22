import { tagsQuery } from './tags-query';
import { tagsMutation } from './tags-mutation';

const tagsController = {
  query: tagsQuery,
  mutation: tagsMutation
};

export default tagsController;
