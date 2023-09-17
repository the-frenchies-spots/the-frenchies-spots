import { gql } from "@apollo/client";

export const signIn = gql`
  mutation signIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      accessToken
      refreshToken
      user {
        email
        hashedPassword
        hashedRefreshToken
        id
        profile {
          id
          gamePoint
          photoUrl
          pseudo
          userId
        }
        role
      }
    }
  }
`;
