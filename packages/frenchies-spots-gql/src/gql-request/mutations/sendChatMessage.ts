import { gql } from "@apollo/client";

export const sendChatMessage = gql`
  mutation sendChatMessage($sendChatMessageInput: SendChatMessageInput!) {
    sendChatMessage(sendChatMessageInput: $sendChatMessageInput) {
      chatId
      createdAt
      id
      message
      profileChatId
      updatedAt
    }
  }
`;
