import { gql } from "@apollo/client";

export const profiles = gql`
  query profiles($profilesInput: ProfilesInput!) {
    profiles(profilesInput: $profilesInput) {
      avatarUrl
      createdAt
      gamePoint
      id
      location
      photoUrl
      pseudo
      updatedAt
      userId
      profileChats {
        chatId
      }
      notifications {
        id
      }
    }
  }
`;
