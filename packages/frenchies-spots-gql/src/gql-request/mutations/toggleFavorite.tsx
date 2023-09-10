import { gql } from "@apollo/client";

export const toggleFavorite = gql`
  mutation toggleFavorite($favoriteInput: FavoriteInput!) {
    toggleFavorite(favoriteInput: $favoriteInput) {
      favoriteId
      isFavorite
    }
  }
`;
