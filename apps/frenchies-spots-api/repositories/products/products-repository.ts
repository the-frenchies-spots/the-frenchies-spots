import { Product, Profile } from "../../models";
import { ProductDto } from "../../dto";

const productsRepository = {
  getAll: () => {
    return Product.findMany();
  },

  create: (data: ProductDto) => {
    return Product.create({ data });
  },

  /**
   * Buy product game points
   */
  buy: (gamePoint: number, profileId: string) => {
    return Profile.update({
      where: { id: profileId },
      data: { gamePoint },
    });
  },
};

export default productsRepository;
