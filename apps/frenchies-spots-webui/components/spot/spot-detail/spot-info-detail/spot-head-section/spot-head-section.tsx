import React, { useContext } from "react";
import { Box, HStack, Title, VStack } from "@frenchies-spots/materials";
import { SpotEdition } from "../spot-edition";
import { SpotRating } from "../../../spot-rating";
import { AddressBlock } from "../../../../app";
import { Rating } from "../../../../../types";
import { AuthContext } from "../../../../../context";

interface SpotHeadSectionProps {
  spotId: string;
  title: string;
  location?: string;
  isUserOwner: boolean;
  rate?: Rating;
  averageRating?: number;
  maxVote?: number;
}

export const SpotHeadSection = (props: SpotHeadSectionProps) => {
  const { spotId, title, location, isUserOwner, rate, averageRating, maxVote } =
    props;
  const { currentUser } = useContext(AuthContext);

  return (
    <HStack justify="between">
      <VStack spacing={8}>
        <Box>
          <Title variant="h3">{title}</Title>
        </Box>
        <Box style={{ width: 250 }}>
          <AddressBlock mode="description" location={location} />
        </Box>

        {maxVote !== undefined && (
          <Box>
            <SpotRating
              spotId={spotId}
              rate={rate}
              averageRating={averageRating}
              isUserOwner={isUserOwner}
              maxVote={maxVote}
            />
          </Box>
        )}
      </VStack>

      {currentUser && isUserOwner && <SpotEdition spotId={spotId} />}
    </HStack>
  );
};
