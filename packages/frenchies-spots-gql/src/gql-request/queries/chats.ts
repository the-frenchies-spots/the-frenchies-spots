import { gql } from "@apollo/client";

export const chats = gql`
  query chats {
    chats {
      _count {
        chatMessages
      }
      createdAt
      id
      isTemporary
      participants {
        chatId
        createdAt
        id
        profileId
        updatedAt
        profile {
          pseudo
          photoUrl
          avatarUrl
        }
      }
      updatedAt
    }
  }
`;
