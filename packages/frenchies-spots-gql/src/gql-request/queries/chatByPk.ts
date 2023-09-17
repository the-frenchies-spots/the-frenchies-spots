import { gql } from "@apollo/client";

export const chatByPk = gql`
  query chatByPk($chatId: String!) {
    chatByPk(chatId: $chatId) {
      chatMessages {
        chatId
        createdAt
        id
        message
        profileChatId
        updatedAt
      }
      createdAt
      id
      isTemporary
      participants {
        chatId
        id
        profileId
        profile {
          id
          avatarUrl
          photoUrl
          pseudo
        }
      }
      updatedAt
    }
  }
`;
