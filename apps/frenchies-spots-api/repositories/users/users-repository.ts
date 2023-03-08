import { Profile as ProfileDto } from "@prisma/client";
import { UserDto } from "../../dto/users-dto";
import { Profile, User } from "../../models";

const usersRepository = {
  /**
   * @param {any} parent
   * @param {{ searchString: string }} args
   * @param {{ prisma: Prisma }} ctx
   */
  getAll: () => {
    return User.findMany();
  },

  getOne: (email: string) => {
    return User.findUnique({ where: { email } });
  },

  create: (pseudo: string, email: string, password: string, token: string) => {
    return User.create({
      data: {
        email,
        password,
        token,
        profile: { create: { pseudo } },
      },
      include: { profile: true },
    });
  },

  update: (user: Pick<UserDto, "email" | "password">, profile: Pick<ProfileDto, "pseudo" | "photoUrl">, userId: string) => {
    return User.update({
      where: {
        id: userId,
      },
      data: {
        ...user,
        profile: {
          upsert: {
            update: {
              ...profile,
            },
            create: {
              ...profile,
            },
          },
        },
      },
      include: { profile: true },
    });
  },

  deleteUser: (userId: string) => {
    return User.delete({
      where: {
        id: userId,
      },
    });
  },

  deleteProfile: (profileId: string) => {
    return Profile.delete({
      where: {
        id: profileId,
      },
    });
  },

  login: (email: string, token: string) => {
    return User.update({
      where: { email },
      data: { token },
      include: { profile: true },
    });
  },

  logout: async (token: string) => {
    return User.update({
      where: { token },
      data: { token: "" },
      include: { profile: true },
    })
      .then(() => true)
      .catch(() => false);
  },

  getAuth: (token: string) => {
    return User.findUnique({ where: { token }, include: { profile: true } });
  },
};

export default usersRepository;
