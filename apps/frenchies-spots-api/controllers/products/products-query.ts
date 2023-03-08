import { productsBusiness } from "../../business";

export const productsQuery = {
  products: () => {
    return productsBusiness.getAll();
  },

  /**
   * Get buy product request
   */
  getBuyProductRequest: (_: undefined, data: { amount: number }) => {
    const { amount } = data;
    return productsBusiness.buyRequest(amount);
  },
};
