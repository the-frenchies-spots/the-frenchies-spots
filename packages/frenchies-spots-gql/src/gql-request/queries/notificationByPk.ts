import { gql } from "@apollo/client";

export const notificationByPk = gql`
  query notificationByPk($notifId: String!) {
    notificationByPk(notifId: $notifId) {
      content
      id
      isRead
      profileSender {
        avatarUrl
        createdAt
        gamePoint
        id
        location
        photoUrl
        pseudo
        updatedAt
        userId
      }
      profileSenderId
      type
    }
  }
`;
