import { Prisma, Profile, User } from '@prisma/client';

export type UserFindManyResult = Prisma.PrismaPromise<User[]>;

export type UserFindByEmailResult = Prisma.Prisma__UserClient<
  User | null,
  null
>;

export type CreateUserResult = Prisma.Prisma__UserClient<
  User & {
    profile: Profile | null;
  },
  never
>;

export type UpdateUserResult = Prisma.Prisma__UserClient<
  User & {
    profile: Profile | null;
  },
  never
>;

export type DeleteUserResult = Prisma.Prisma__UserClient<User, never>;

export type DeletProfileResult = Prisma.Prisma__ProfileClient<
  Profile,
  never
>;

export type LoginResult = Prisma.Prisma__UserClient<
  User & {
    profile: Profile | null;
  },
  never
>;

export type FindUserResult = Prisma.Prisma__UserClient<
  | (User & {
      profile: Profile | null;
    })
  | null,
  null
>;

export type CreateVerifiedUserResult = Promise<
  User & {
    profile: Profile | null;
  }
>;

export type SignInResult = Promise<
  User & {
    profile: Profile | null;
  }
>;

export type AuthByTockenResult = Promise<
  | (User & {
      profile: Profile | null;
    })
  | null
>;
