import { gql } from "@apollo/client";

const READ_ALL_FAVORITE_SPOT_QUERY = gql`
  query getProfileFavorites($profileId: String) {
    profile: favorites(profileId: $profileId) {
      favorites {
        id
        spot {
          category
          description
          id
          isCanPark
          isHidden
          lat
          lng
          name
          region
          spotPicture {
            id
            url
          }
        }
      }
    }
  }
`;

export default READ_ALL_FAVORITE_SPOT_QUERY;
