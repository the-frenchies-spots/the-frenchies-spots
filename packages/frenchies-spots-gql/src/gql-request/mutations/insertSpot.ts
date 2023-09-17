import { gql } from "@apollo/client";

export const insertSpot = gql`
  mutation insertSpot($insertSpotInput: SpotInput!) {
    insertSpot(insertSpotInput: $insertSpotInput) {
      address
      averageRating
      category
      createdAt
      description
      id
      isCanPark
      isHidden
      location
      name
      profileId
      region
      spotPicture {
        id
        url
      }
      tags {
        tag {
          category
          id
          name
          tagPictureUrl
        }
      }
    }
  }
`;
