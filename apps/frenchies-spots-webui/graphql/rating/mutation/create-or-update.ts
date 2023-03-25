import { gql } from "@apollo/client";

const CREATE_OR_UPDATE_RATING_MUTATION = gql`
  mutation createOrUpdateRating(
    $ratingId: String
    $spotId: String
    $rate: Int
  ) {
    rating: createOrUpdateRating(
      ratingId: $ratingId
      spotId: $spotId
      rate: $rate
    ) {
      currentRating {
        id
        rate
        profileId
        spotId
      }
      avg
      maxVote
    }
  }
`;

export default CREATE_OR_UPDATE_RATING_MUTATION;
