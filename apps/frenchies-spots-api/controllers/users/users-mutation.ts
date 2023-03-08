import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";
import { GenericError, codeErrors } from "../../utils";
import { UserDto } from "../../dto/users-dto";
const { UNAUTHENTICATED } = codeErrors;

export const usersMutation = {
  /**
   * @param {SignInDto} data
   */
  signUp: (_: undefined, data: SignInDto) => {
    return usersBusiness.signUp(data);
  },

  /**
   * @param {SignInDto} data
   * @param {TContext} context
   */
  signIn: (_: undefined, data: SignInDto, context: TContext) => {
    return usersBusiness.signIn(data);
  },

  /**
   * @param {TContext} context
   */
  signOut: (_: undefined, data: undefined, context: TContext) => {
    const { user } = context;
    if (!user) throw new GenericError(UNAUTHENTICATED);
    const { token } = user;
    return usersBusiness.signOut(token);
  },

  updateUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);
    return usersBusiness.update(data, profileId);
  },

  deleteUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const userId = user?.id;
    const profileId = user?.profile.id;

    if (!userId || !profileId) throw new GenericError(UNAUTHENTICATED);
    return usersBusiness.delete(userId, profileId);
  },
};
