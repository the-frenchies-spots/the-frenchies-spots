import { gql } from "@apollo/client";

export const getLoginUser = gql`
  query getLoginUser {
    getLoginUser {
      createdAt
      email
      hashedPassword
      hashedRefreshToken
      id
      profile {
        createdAt
        gamePoint
        id
        photoUrl
        pseudo
        updatedAt
        userId
      }
      role
      updatedAt
    }
  }
`;
