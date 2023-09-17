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
        avatarUrl
        photoUrl
        pseudo
        updatedAt
        location
        userId
        contacts {
          authorization
          createdAt
          id
          isFriend
          profileId
          updatedAt
        }
      }
      role
      updatedAt
    }
  }
`;
