import {
  usersController,
  itinariesController,
  spotsController,
  spotPicturesController,
  productsController,
  ratingsController,
  favoritesController,
  tagsController
} from '../controllers';
import { tagsQuery } from '../controllers/tags/tags-query';

const Query = {
  ...usersController.query,
  ...itinariesController.query,
  ...spotsController.query,
  ...spotPicturesController.query,
  ...ratingsController.query,
  ...favoritesController.query,
  ...tagsController.query
};

const Mutation = {
  ...usersController.mutation,
  ...itinariesController.mutation,
  ...spotsController.mutation,
  ...spotPicturesController.mutation,
  ...productsController.mutation,
  ...ratingsController.mutation,
  ...favoritesController.mutation,
  ...tagsController.mutation
};

const resolvers = { Query, Mutation };

export default resolvers;
