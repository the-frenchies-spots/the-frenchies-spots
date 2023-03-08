import { gql } from "@apollo/client";

const TOGGLE_FAVORITE_MUTATION = gql`
  mutation toggleFavorite($spotId: String, $id: String) {
    favoriteSpot: toggleFavorite(spotId: $spotId, id: $id) {
      id
      name
      favorites {
        id
        profileId
      }
    }
  }
`;

export default TOGGLE_FAVORITE_MUTATION;
