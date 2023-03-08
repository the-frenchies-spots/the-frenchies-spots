import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { GenericError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const usersQuery = {
  users: () => {
    return usersBusiness.getAll();
  },

  /**
   * @param {SignInDto} data
   * @param {TContext} context
   */
  authByToken: (_: undefined, data: undefined, context: TContext) => {
    const { user } = context;
    if (!user) throw new GenericError(UNAUTHENTICATED);
    return user;
  },
};
