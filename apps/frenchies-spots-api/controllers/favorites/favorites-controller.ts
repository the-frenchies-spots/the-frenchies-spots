import { favoritesQuery } from "./favorites-query";
import { favoritesMutation } from "./favorites-mutation";

const favoritesController = {
  query: favoritesQuery,
  mutation: favoritesMutation,
};

export default favoritesController;
