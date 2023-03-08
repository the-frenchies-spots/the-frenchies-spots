import { spotsQuery } from "./spots-query";
import { spotsMutation } from "./spots-mutation";

const spotsController = {
  query: spotsQuery,
  mutation: spotsMutation,
};

export default spotsController;
