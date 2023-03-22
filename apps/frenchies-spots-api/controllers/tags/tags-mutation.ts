import { tagsBusiness } from '../../business';
import { TagDto } from '../../dto';
import { TContext } from '../../graphql/context';

export const tagsMutation = {
  addTag: (_: undefined, data: TagDto) => {
    return tagsBusiness.create(data);
  }
};
