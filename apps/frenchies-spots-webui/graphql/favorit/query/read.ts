import { gql } from "@apollo/client";

const READ_ALL_FAVORITE_SPOT_QUERY = gql`
  query getProfileFavorites($profileId: String) {
    profile: favorites(profileId: $profileId) {
      favorites {
        spot {
          id
          name
          description
          isCanPark
          isCanVisit
          isTouristic
          region
          profileId
          averageRating
          spotPicture {
            url
          }
        }
      }
    }
  }
`;

export default READ_ALL_FAVORITE_SPOT_QUERY;
