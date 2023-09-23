import { gql } from "@apollo/client";

export const signUp = gql`
  mutation signUp($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
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
          isLocated
          avatarUrl
        }
        role
      }
    }
  }
`;
