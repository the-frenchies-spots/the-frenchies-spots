import { productsQuery } from "./products-query";
import { productsMutation } from "./products-mutation";

const productsController = {
  query: productsQuery,
  mutation: productsMutation,
};

export default productsController;
