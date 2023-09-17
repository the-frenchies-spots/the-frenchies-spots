import { gql } from "@apollo/client";

export const createOrUpdateRating = gql`
  mutation createOrUpdateRating($ratingInput: RatingInput!) {
    createOrUpdateRating(ratingInput: $ratingInput) {
      avg
      currentRating {
        createdAt
        id
        profileId
        rate
        spotId
        updatedAt
      }
      maxVote
    }
  }
`;
