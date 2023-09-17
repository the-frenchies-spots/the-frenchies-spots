import { gql } from "@apollo/client";

export const upload = gql`
  mutation upload($pictureInput: PictureInput!) {
    upload(pictureInput: $pictureInput) {
      height
      public_id
      secure_url
      url
      width
    }
  }
`;
