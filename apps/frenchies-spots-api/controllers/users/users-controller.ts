import { usersQuery } from "./users-query";
import { usersMutation } from "./users-mutation";

const usersController = {
  query: usersQuery,
  mutation: usersMutation,
};

export default usersController;
