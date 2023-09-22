import { gql } from "@apollo/client";

export const contacts = gql`
  query contacts($contactsInput: ContactsInput!) {
    contacts(contactsInput: $contactsInput) {
      authorization
      contact {
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
        contacts {
          id
          isFriend
        }
      }
      contactId
      createdAt
      id
      isFriend
      profileId
      updatedAt
    }
  }
`;
