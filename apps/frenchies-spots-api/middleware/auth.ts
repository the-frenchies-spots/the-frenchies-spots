import { usersBusiness } from "../business";
import { Role } from "@prisma/client";

/**
 * Get the user token from the headers.
 * @param {string} token
 */
const authMiddleware = async (token: string) => {
  // Try to retrieve a user with the token
  const user = await usersBusiness.authByToken(token);

  // Add auth information to the context
  const isLogin: boolean = user !== null;

  return { isLogin, user };
};

export default authMiddleware;
