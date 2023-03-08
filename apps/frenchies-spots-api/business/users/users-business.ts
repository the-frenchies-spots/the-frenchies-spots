import { usersRepository } from "../../repositories";
import { SignInDto } from "../../dto";
import { GenericError, codeErrors } from "../../utils";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { UserDto } from "../../dto/users-dto";

const { USER_ALREADY_EXISTS, USER_NOT_FOUND, INCORRECT_PASSWORD } = codeErrors;
const secretKey = process.env.SECRET_KEY;

const usersBusiness = {
  getAll: () => {
    return usersRepository.getAll();
  },

  update: (data: UserDto, userId: string) => {
    const { email, password, pseudo, photoUrl } = data;
    const user = { email, password };
    const profile = { pseudo, photoUrl };
    return usersRepository.update(user, profile, userId);
  },

  delete: async (userId: string, profileId: string) => {
    const isProfileDeleted = await usersRepository.deleteProfile(profileId);
    const isUserDeleted = await usersRepository.deleteUser(userId);

    if (isProfileDeleted && isUserDeleted) return true;
    return false;
  },

  signUp: async (data: SignInDto) => {
    const { pseudo, email, password } = data;

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

    return usersRepository.create(pseudo, email, hashPassword, token);
  },

  signIn: async (data: SignInDto) => {
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

  authByToken: async (token: string) => {
    return usersRepository.getAuth(token);
  },

  signOut: async (token: string) => {
    return await usersRepository.logout(token);
  },
};

export default usersBusiness;
