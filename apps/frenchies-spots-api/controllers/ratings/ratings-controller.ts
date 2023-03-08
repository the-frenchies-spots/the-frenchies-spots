import { ratingsQuery } from "./ratings-query";
import { ratingsMutation } from "./ratings-mutation";

const ratingsController = {
  query: ratingsQuery,
  mutation: ratingsMutation,
};

export default ratingsController;
