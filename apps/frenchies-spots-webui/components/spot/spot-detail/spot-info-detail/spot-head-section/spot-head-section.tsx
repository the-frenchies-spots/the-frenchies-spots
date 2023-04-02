import React from "react";
import { Box, HStack, Title, VStack } from "@frenchies-spots/materials";
import { AddressBlock } from "../../../../app";
import { SpotEdition } from "../spot-edition";

interface SpotHeadSectionProps {
  spotId: string;
  title: string;
  location: string;
  isUserOwner: boolean;
}

export const SpotHeadSection = (props: SpotHeadSectionProps) => {
  const { spotId, title, location, isUserOwner } = props;
  return (
    <HStack justify="between">
      <VStack spacing={8}>
        <Box>
          <Title variant="h3">{title}</Title>
        </Box>
        <Box>
          <AddressBlock mode="description" location={location} />
        </Box>
      </VStack>

      {isUserOwner && <SpotEdition spotId={spotId} />}
    </HStack>
  );
};
