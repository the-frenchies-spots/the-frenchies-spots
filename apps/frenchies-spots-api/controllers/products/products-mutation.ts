import { Profile } from '@prisma/client';
import { productsBusiness } from '../../business';
import { ProductDto } from '../../dto';
import { TContext } from '../../graphql/context';
import { CreateProductResult } from '../../types';
import { GenericError, codeErrors } from '../../utils';
const { UNAUTHENTICATED } = codeErrors;

export const productsMutation = {
  createProduct: (_: undefined, data: ProductDto): CreateProductResult => {
    return productsBusiness.create(data);
  },

  /**
   * @param {ByProductDto} data
   * @param {TContext} context
   */
  buyProduct: (
    _: undefined,
    data: { gamePoint: number; token: string; amount: number },
    context: TContext
  ): Promise<Profile> => {
    const { gamePoint: ProductGamePoint, token, amount } = data;
    const { user } = context;

    const profileId = user?.profile.id;
    const userGamePoint = user?.profile.gamePoint;

    if (!profileId || typeof userGamePoint === 'undefined')
      throw new GenericError(UNAUTHENTICATED);

    return productsBusiness.buy(
      ProductGamePoint,
      profileId,
      userGamePoint,
      token,
      amount
    );
  }
};
