import React, { useState } from "react";

import {
  MutationCreateOrUpdateRatingArgs,
  RatingResponse,
  SpotByIdResponse,
  mutations,
  queries,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";
import { Rating, Group, Text, Log, Loader } from "@frenchies-spots/material";
import SpotRatingStat from "./SpotRatingStat";

type SpotRatingProps = Pick<SpotByIdResponse, "rating" | "id">;

const SpotRating = ({ id: spotId, rating: initRating }: SpotRatingProps) => {
  const [rating, setRating] = useState<RatingResponse>(
    initRating || { currentRating: undefined, avg: 0, maxVote: 0 }
  );

  const [insertRate, { loading }] = useMutation<
    { createOrUpdateRating: RatingResponse },
    MutationCreateOrUpdateRatingArgs
  >(mutations.createOrUpdateRating, {
    refetchQueries: [queries.spots, queries.spotByPk],
  });

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
      {loading ? <Loader size="sm" /> : <SpotRatingStat rating={rating} />}
    </Group>
  );
};

export default SpotRating;
