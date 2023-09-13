import { Maybe, RatingResponse } from "@frenchies-spots/gql";
import { IconStarFilled } from "@frenchies-spots/icon";
import { Group, Text } from "@frenchies-spots/material";
import React from "react";

interface SpotRatingStatProps {
  rating?: Maybe<RatingResponse> | undefined;
  withIcon?: boolean;
}

const SpotRatingStat = ({ rating, withIcon = false }: SpotRatingStatProps) => {
  return (
    <Group spacing={5}>
      {withIcon && <IconStarFilled size={16} />}
      <Text>
        Note: {+(rating?.avg?.toFixed(2) || 0)}/5 - ({rating?.maxVote || 0}{" "}
        votes)
      </Text>
    </Group>
  );
};

export default SpotRatingStat;
