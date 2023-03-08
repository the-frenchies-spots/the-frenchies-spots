import { User, Profile } from "@prisma/client";

export type SignInDto = Pick<User, "email" | "password"> &
  Pick<Profile, "pseudo">;

export type UserDto = Pick<User, "email" | "password"> &
  Pick<Profile, "pseudo" | "photoUrl">;
