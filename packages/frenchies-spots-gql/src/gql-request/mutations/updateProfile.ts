import { gql } from "@apollo/client";

export const updateProfile = gql`
  mutation updateProfile($profileInput: ProfileInput!) {
    updateProfile(profileInput: $profileInput) {
      createdAt
      email
      hashedPassword
      hashedRefreshToken
      id
      profile {
        avatarUrl
        createdAt
        gamePoint
        id
        location
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
