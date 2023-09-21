import { gql } from "@apollo/client";

export const acceptFriendContact = gql`
  mutation acceptFriendContact($contactId: String!) {
    acceptFriendContact(contactId: $contactId)
  }
`;
