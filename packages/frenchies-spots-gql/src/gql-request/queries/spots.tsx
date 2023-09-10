import { gql } from "@apollo/client";

export const spots = gql`
  query spots($spotsInput: SpotsInput!) {
    spots(spotsInput: $spotsInput) {
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
        url
      }
      favorites {
        id
        spotId
      }
      ratings {
        id
        rate
        spotId
      }
    }
  }
`;
