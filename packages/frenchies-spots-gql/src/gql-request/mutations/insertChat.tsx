import { gql } from "@apollo/client";

export const insertChat = gql`
  mutation insertChat($inserChatInput: InserChatInput!) {
    insertChat(inserChatInput: $inserChatInput) {
      id
      isTemporary
      createdAt
      updatedAt
    }
  }
`;
