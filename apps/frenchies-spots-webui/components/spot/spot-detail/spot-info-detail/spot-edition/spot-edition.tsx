import { Box, HStack } from "@frenchies-spots/materials";
import React from "react";
import { DeleteButton, EditButton } from "../../../../app";

interface SpotEditionProps {
  spotId: string;
}

export const SpotEdition = (props: SpotEditionProps) => {
  const { spotId } = props;

  return (
    <HStack spacing={20}>
      <Box>
        <EditButton spotId={spotId} />
      </Box>
      <Box>
        <DeleteButton spotId={spotId} />
      </Box>
    </HStack>
  );
};
