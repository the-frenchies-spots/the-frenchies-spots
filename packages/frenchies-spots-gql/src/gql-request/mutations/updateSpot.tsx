import { gql } from "@apollo/client";

export const updateSpot = gql`
  mutation updateSpot($updateSpotInput: SpotInput!) {
    updateSpot(updateSpotInput: $updateSpotInput) {
      address
      averageRating
      category
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
        spotId
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
