import { gql } from "@apollo/client";

export const friendByPk = gql`
  query friendByPk($friendId: String!) {
    friendByPk(friendId: $friendId) {
      avatarUrl
      createdAt
      gamePoint
      id
      location
      slogan
      isLocated
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
  }
`;
