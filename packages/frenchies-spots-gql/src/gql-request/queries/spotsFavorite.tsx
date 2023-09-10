import { gql } from "@apollo/client";

export const spotsFavorite = gql`
  query spotsFavorite {
    spotsFavorite {
      id
      address
      averageRating
      category
      description
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
      ratings {
        id
        rate
        spotId
      }
      favorites {
        id
        spotId
      }
    }
  }
`;
