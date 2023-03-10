import { Product, Profile } from '../../models';
import { ProductDto } from '../../dto';
import {
  CreateProductResult,
  ProductBuyGamePoint,
  ProductFindManyResult
} from '../../types';

const productsRepository = {
  getAll: (): ProductFindManyResult => {
    return Product.findMany();
  },

  create: (data: ProductDto): CreateProductResult => {
    return Product.create({ data });
  },

  /**
   * Buy product game points
   */
  buy: (gamePoint: number, profileId: string): ProductBuyGamePoint => {
    return Profile.update({
      where: { id: profileId },
      data: { gamePoint }
    });
  }
};

export default productsRepository;
