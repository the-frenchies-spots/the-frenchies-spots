import {
  usersController,
  itinariesController,
  spotsController,
  spotPicturesController,
  productsController,
  ratingsController,
  favoritesController,
} from "../controllers";

const Query = {
  ...usersController.query,
  ...itinariesController.query,
  ...spotsController.query,
  ...spotPicturesController.query,
  ...ratingsController.query,
  ...favoritesController.query,
};

const Mutation = {
  ...usersController.mutation,
  ...itinariesController.mutation,
  ...spotsController.mutation,
  ...spotPicturesController.mutation,
  ...productsController.mutation,
  ...ratingsController.mutation,
  ...favoritesController.mutation,
};

const resolvers = { Query, Mutation };

export default resolvers;
