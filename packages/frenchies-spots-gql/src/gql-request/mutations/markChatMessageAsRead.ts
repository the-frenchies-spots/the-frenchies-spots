import { gql } from "@apollo/client";

export const markChatMessageAsRead = gql`
  mutation markChatMessageAsRead($chatId: String!) {
    markChatMessageAsRead(chatId: $chatId)
  }
`;
