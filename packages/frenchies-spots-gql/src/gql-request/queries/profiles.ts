import { gql } from "@apollo/client";

export const profiles = gql`
  query profiles($profilesInput: ProfilesInput!) {
    profiles(profilesInput: $profilesInput) {
      avatarUrl
      createdAt
      gamePoint
      id
      slogan
      isLocated
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
      contacts {
        id
        isFriend
      }
    }
  }
`;
