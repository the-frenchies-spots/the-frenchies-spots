import React, { useState } from "react";

import {
  MutationCreateOrUpdateRatingArgs,
  RatingResponse,
  SpotByIdResponse,
  mutations,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";
import { Rating, Group, Text, Log, Loader } from "@frenchies-spots/material";

type SpotRatingProps = Pick<SpotByIdResponse, "rating" | "id">;

const SpotRating = ({ id: spotId, rating: initRating }: SpotRatingProps) => {
  const [rating, setRating] = useState<RatingResponse>(initRating);

  const [insertRate, { loading }] = useMutation<
    { createOrUpdateRating: RatingResponse },
    MutationCreateOrUpdateRatingArgs
  >(mutations.createOrUpdateRating);

  const handleRatingChange = (value: number) => {
    if (!loading) {
      setRating((current) => ({
        ...current,
        currentRating: { rate: value } as RatingResponse["currentRating"],
      }));
      insertRate({
        variables: {
          ratingInput: {
            spotId,
            rate: value,
            ratingId: rating?.currentRating?.id,
          },
        },
      }).then((response) => {
        if (response && response?.data?.createOrUpdateRating) {
          setRating(response.data.createOrUpdateRating);
        }
      });
    }
  };

  return (
    <Group>
      <Rating
        fractions={5}
        onChange={handleRatingChange}
        value={+(rating?.currentRating?.rate?.toFixed(2) || 0)}
        color="lime"
        size="lg"
      />
      {loading ? (
        <Loader size="sm" />
      ) : (
        <Text>
          Note: {+(rating?.avg?.toFixed(2) || 0)}/5 - ({rating?.maxVote || 0}{" "}
          votes)
        </Text>
      )}
    </Group>
  );
};

export default SpotRating;
