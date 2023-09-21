import { gql } from "@apollo/client";

export const appNotification = gql`
  query appNotification {
    chatMessagesNotRead
    notifications {
      id
      type
      isRead
      content
      profileId
      profileSender {
        id
        pseudo
        photoUrl
        avatarUrl
      }
    }
  }
`;
