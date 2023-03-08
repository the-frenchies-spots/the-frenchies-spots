import { itinariesBusiness } from "../../business";
import { CreateItinaryDto, buysItinaryDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { GenericError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const itinariesMutation = {
  /**
   * @param {ItinaryDto} data
   */
  // createItinary: (_: undefined, data: CreateItinaryDto, context: TContext) => {
  //   const { user } = context;

  //   const profileId = user?.profile.id;
  //   if (!profileId) throw new GenericError(UNAUTHENTICATED);

  //   return itinariesBusiness.create(data, profileId);
  // },

  /**
   * @param {buysItinaryDto} data
   */
  buysItinary: (_: undefined, data: buysItinaryDto) => {
    return itinariesBusiness.connectUser(data);
  },
};
