import { createContext } from "react";
import {
  User,
  LoginRequestParameters,
  SignUpRequestParameters,
} from "../types";

interface AuthContextData {
  token: string | undefined;
  currentUser: User | undefined;
  processLogin: ((params: LoginRequestParameters) => Promise<void>) | undefined;
  processSignUp:
    | ((params: SignUpRequestParameters) => Promise<void>)
    | undefined;
  processSignOut: (() => Promise<void>) | undefined;
}

const defaultContext: AuthContextData = {
  token: undefined,
  currentUser: undefined,
  processLogin: undefined,
  processSignUp: undefined,
  processSignOut: undefined,
};

const AuthContext = createContext<AuthContextData>(defaultContext);

export default AuthContext;
