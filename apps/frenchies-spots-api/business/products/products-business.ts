import { productsRepository, stripeRepository } from "../../repositories";
import { ProductDto } from "../../dto";
import { GenericError, codeErrors } from "../../utils";
const { INTERNAL_SERVER_ERROR } = codeErrors;

const productsBusiness = {
  getAll: () => {
    return productsRepository.getAll();
  },

  create: (data: ProductDto) => {
    return productsRepository.create(data);
  },

  /**
   * Buy product game points
   * Logic for stripe web
   */
  buy: async (
    productGamePoint: number,
    profileId: string,
    userGamePoint: number,
    token: string,
    amount: number
  ) => {
    return stripeRepository
      .payment(token, amount)
      .then(() => {
        const gamePoint = userGamePoint + productGamePoint;
        return productsRepository.buy(gamePoint, profileId);
      })
      .catch((err) => {
        throw new GenericError(
          INTERNAL_SERVER_ERROR,
          `Payment method failed : ${err}`
        );
      });
  },

  /**
   * Request to buy game points
   * Logic for stripe android
   */
  buyRequest: async (amount: number) => {
    const paymentIntent = await stripeRepository.createPaymentRequest(amount);
    return paymentIntent.client_secret;
  },
};

export default productsBusiness;
