import { createContext } from "react";

import type {
  UserEntity,
  SignInInput,
  SignUpInput,
} from "@frenchies-spots/gql";

interface AuthContextData {
  token: string | null;
  loading: boolean;
  currentUser: UserEntity | undefined;
  refresh: (() => Promise<boolean>) | undefined;
  processSignIn: ((variables: SignInInput) => Promise<void>) | undefined;
  processSignUp: ((signUpInput: SignUpInput) => Promise<void>) | undefined;
  processSignOut: (() => Promise<void>) | undefined;
}

const defaultContext: AuthContextData = {
  token: null,
  loading: false,
  currentUser: undefined,
  refresh: undefined,
  processSignIn: undefined,
  processSignUp: undefined,
  processSignOut: undefined,
};

const AuthContext = createContext<AuthContextData>(defaultContext);

export default AuthContext;
