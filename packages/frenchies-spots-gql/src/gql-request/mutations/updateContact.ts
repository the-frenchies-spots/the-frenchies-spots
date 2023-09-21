import { gql } from "@apollo/client";

export const updateContact = gql`
  mutation updateContact($contactsInput: ContactInput!) {
    updateContact(contactsInput: $contactsInput) {
      authorization
      contactId
      createdAt
      id
      isFriend
      profileId
      updatedAt
    }
  }
`;
