import { tagsBusiness } from "../../business";
import { TagDto, TagUpdateDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { GenericError, codeErrors } from "../../utils";

const { USER_DONT_HAVE_THE_PERMISSION } = codeErrors;

export const tagsMutation = {
  createTag: (_: undefined, data: TagDto, context: TContext) => {
    const { user } = context;
    if (user && user?.role && user?.role === "USER_ADMIN") {
      return tagsBusiness.create(data);
    }
    throw new GenericError(USER_DONT_HAVE_THE_PERMISSION);
  },

  updateTag: (_: undefined, data: TagUpdateDto, context: TContext) => {
    const { user } = context;
    const role = user?.role;
    if (role !== "USER_ADMIN")
      throw new GenericError(USER_DONT_HAVE_THE_PERMISSION);
    return tagsBusiness.update(data);
  },

  deleteTag: (_: undefined, data: { id: string }, context: TContext) => {
    const { user } = context;
    const role = user?.role;
    if (role !== "USER_ADMIN")
      throw new GenericError(USER_DONT_HAVE_THE_PERMISSION);

    const { id } = data;
    return tagsBusiness.delete(id);
  },
};
