import { gql } from "@apollo/client";

export const buyAvatar = gql`
  mutation buyAvatar($avatarsInput: AvatarInput!) {
    buyAvatar(avatarsInput: $avatarsInput) {
      avatarUrl
      avatars {
        avatar {
          avatarUrl
          id
          isPublic
          pointsRequire
        }
        avatarId
        id
        profileId
      }
    }
  }
`;
