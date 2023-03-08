import { User, Profile } from "@prisma/client";

interface UserProfile extends User {
  profile: Profile;
}

export interface TContext {
  isLogin: boolean;
  user: null | UserProfile;
}
