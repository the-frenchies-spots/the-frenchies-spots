import { gql } from "@apollo/client";

export const chats = gql`
  query chats {
    chats {
      createdAt
      id
      isTemporary
      participants {
        chatId
        createdAt
        id
        profileId
        updatedAt
      }
      updatedAt
    }
  }
`;
