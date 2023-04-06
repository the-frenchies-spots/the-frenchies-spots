import { Profile as ProfileDto, Role } from '@prisma/client';
import { UserDto } from '../../dto/users-dto';
import { Profile, User } from '../../models';
import {
  CreateUserResult,
  DeleteUserResult,
  DeletProfileResult,
  FindUserResult,
  LoginResult,
  UpdateUserResult,
  UserFindByEmailResult,
  UserFindManyResult
} from '../../types';

const usersRepository = {
  /**
   * @param {any} parent
   * @param {{ searchString: string }} args
   * @param {{ prisma: Prisma }} ctx
   */
  getAll: (): UserFindManyResult => {
    return User.findMany();
  },

  getOne: (email: string): UserFindByEmailResult => {
    return User.findUnique({ where: { email } });
  },

  create: (
    pseudo: string,
    email: string,
    password: string,
    token: string, 
    role: Role,
  ): CreateUserResult => {
    return User.create({
      data: {
        email,
        password,
        token,
        role,
        profile: { create: { pseudo } }
      },
      include: { profile: true }
    });
  },

  update: (
    user: Pick<UserDto, 'email' | 'password'>,
    profile: Pick<ProfileDto, 'pseudo' | 'photoUrl'>,
    userId: string
  ): UpdateUserResult => {
    return User.update({
      where: {
        id: userId
      },
      data: {
        ...user,
        profile: {
          upsert: {
            update: {
              ...profile
            },
            create: {
              ...profile
            }
          }
        }
      },
      include: { profile: true }
    });
  },

  deleteUser: (userId: string): DeleteUserResult => {
    return User.delete({
      where: {
        id: userId
      }
    });
  },

  deleteProfile: (profileId: string): DeletProfileResult => {
    return Profile.delete({
      where: {
        id: profileId
      }
    });
  },

  login: (email: string, token: string): LoginResult => {
    return User.update({
      where: { email },
      data: { token },
      include: { profile: true }
    });
  },

  logout: async (token: string): Promise<boolean> => {
    return User.update({
      where: { token },
      data: { token: '' },
      include: { profile: true }
    })
      .then(() => true)
      .catch(() => false);
  },

  getAuth: (token: string): FindUserResult => {
    return User.findUnique({
      where: { token },
      include: { profile: true }
    });
  }
};

export default usersRepository;
