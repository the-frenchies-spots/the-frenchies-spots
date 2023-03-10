import { productsBusiness } from '../../business';
import { ProductFindManyResult } from '../../types';

export const productsQuery = {
  products: (): ProductFindManyResult => {
    return productsBusiness.getAll();
  },

  /**
   * Get buy product request
   */
  getBuyProductRequest: (
    _: undefined,
    data: { amount: number }
  ): Promise<string | null> => {
    const { amount } = data;
    return productsBusiness.buyRequest(amount);
  }
};
