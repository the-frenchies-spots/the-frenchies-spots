import React, { useState, useCallback, useContext } from "react";
import {
  Box,
  Caption,
  HStack,
  Icon,
  StarRating,
  VStack,
} from "@frenchies-spots/materials";
import { CreateOrUpdateRatingRequestResult, Rating } from "../../../types";
import { useMutation } from "@apollo/client";
import { CREATE_OR_UPDATE_RATING_MUTATION } from "../../../graphql";
import { objectId } from "../../../utils";
import { AuthContext } from "../../../context";
import { useIsFocused } from "@react-navigation/native";

type TRatingParams = {
  ratingId: string;
  maxVote: number;
  rate: number;
  avg: number;
};

interface SpotRatingProps {
  spotId: string;
  rate?: Rating;
  averageRating?: number;
  isUserOwner?: boolean;
  maxVote?: number;
}

export const SpotRating = (props: SpotRatingProps) => {
  const { spotId, maxVote, rate, averageRating, isUserOwner = false } = props;
  const { currentUser } = useContext(AuthContext);
  const [ratingParams, setRatingParams] = useState<TRatingParams>({
    avg: averageRating || 0,
    rate: rate?.rate || 0,
    ratingId: rate?.id || objectId(),
    maxVote: maxVote || 0,
  });

  const [upsertRating] = useMutation<CreateOrUpdateRatingRequestResult>(
    CREATE_OR_UPDATE_RATING_MUTATION
  );

  const isFocused = useIsFocused();

  const handleRatingChange = useCallback(
    (newRate: number) => {
      const { ratingId } = ratingParams;

      setRatingParams((current) => ({ ...current, rate: newRate }));

      const variables = {
        ratingId,
        spotId,
        rate: newRate,
      };

      upsertRating({ variables }).then((result) => {
        const res = result?.data?.rating;
        if (res) {
          setRatingParams((current) => ({
            ...current,
            avg: res.avg,
            maxVote: res.maxVote,
          }));
        }
      });
    },
    [ratingParams]
  );

  return (
    <VStack spacing={5}>
      {currentUser && !isUserOwner && (
        <Box>
          <StarRating
            value={ratingParams.rate}
            onChange={handleRatingChange}
            init={ratingParams.rate === 0}
          />
        </Box>
      )}

      <HStack items="center" spacing={5}>
        <Icon name="star" color="darkGrey" />
        <Caption>
          Note: {ratingParams.avg}/5 - ({ratingParams.maxVote} votes)
        </Caption>
      </HStack>
    </VStack>
  );
};
