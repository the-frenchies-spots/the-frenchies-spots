import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider, {
  CredentialsConfig,
} from "next-auth/providers/credentials";

import { client } from "../../utils";
import {
  MutationSignUpArgs,
  SignResponse,
  mutations,
  SignUpInput,
  MutationSignInArgs,
} from "@frenchies-spots/gql";

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "jsmith",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     if (!credentials?.username || !credentials?.password) return null;
    //     const { username, password } = credentials;
    //     const signInInput = { email: username, password };
    //     const authUser = await client.mutate<
    //       { signUp: SignResponse },
    //       { variables: MutationSignInArgs }
    //     >({
    //       mutation: mutations.signUp,
    //       variables: { variables: { signInInput } },
    //     });
    //     const user = authUser.data?.signUp.user;
    //     if (!user) {
    //       return null;
    //     }
    //     return user;
    //   },
    // }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
