import { usersRepository } from "../../repositories";
import { SignInDto } from "../../dto";
import { GenericError, codeErrors } from "../../utils";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

import { UserDto } from "../../dto/users-dto";
import {
  AuthByTockenResult,
  CreateVerifiedUserResult,
  SignInResult,
  UpdateUserResult,
  UserFindManyResult,
} from "../../types";

const { USER_ALREADY_EXISTS, USER_NOT_FOUND, INCORRECT_PASSWORD } = codeErrors;
const secretKey = process.env.SECRET_KEY;

const usersBusiness = {
  getAll: (): UserFindManyResult => {
    return usersRepository.getAll();
  },

  update: (data: UserDto, userId: string): UpdateUserResult => {
    const { email, password, pseudo, photoUrl } = data;
    const user = { email, password };
    const profile = { pseudo, photoUrl };
    return usersRepository.update(user, profile, userId);
  },

  delete: async (userId: string, profileId: string): Promise<boolean> => {
    const isProfileDeleted = await usersRepository.deleteProfile(profileId);
    const isUserDeleted = await usersRepository.deleteUser(userId);

    if (isProfileDeleted && isUserDeleted) return true;
    return false;
  },

  signUp: async (data: SignInDto): CreateVerifiedUserResult => {
    const { pseudo, email, password, role } = data;

    // See if an old user exists with email attemting to register
    const oldUser = await usersRepository.getOne(email);

    if (oldUser) {
      throw new GenericError(USER_ALREADY_EXISTS, email);
    }

    // Encrypt password
    const hashPassword = await hash(password, 10);

    // Create our token
    const token = jwt.sign({ email, password: hashPassword }, `${secretKey}`, {
      expiresIn: "48h",
    });

    return usersRepository.create(pseudo, email, hashPassword, token, role);
  },

  signIn: async (data: SignInDto): SignInResult => {
    const { email, password } = data;

    // See if a user exists with the email
    const currentUser = await usersRepository.getOne(email);

    if (!currentUser) {
      throw new GenericError(USER_NOT_FOUND, email);
    }

    // Check if the entered password equals to the hash password
    const { password: hashPassword } = currentUser;
    const isMatchPassword = await bcrypt.compare(password, hashPassword);

    if (isMatchPassword) {
      // Create new token
      const token = jwt.sign(
        { email, password: hashPassword },
        `${secretKey}`,
        {
          expiresIn: "48h",
        }
      );

      return usersRepository.login(email, token);
    }

    throw new GenericError(INCORRECT_PASSWORD);
  },

  authByToken: async (token: string): AuthByTockenResult => {
    return usersRepository.getAuth(token);
  },

  signOut: async (token: string): Promise<boolean> => {
    return await usersRepository.logout(token);
  },
};

export default usersBusiness;
