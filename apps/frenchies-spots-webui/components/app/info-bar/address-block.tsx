import React from "react";
import { HStack, Icon, Title } from "@frenchies-spots/materials";

interface AddressBlockProps {
  mode?: "default" | "description";
  location?: string;
}

export const AddressBlock = (props: AddressBlockProps) => {
  const { mode = "default", location = "Blanquefort, France" } = props;
  const isDefaultMode = mode === "default";

  return (
    <HStack spacing={5} items={isDefaultMode ? "center" : "end"}>
      <Icon
        name="map-marker"
        color={isDefaultMode ? "darkPurple" : "bluePurple"}
        size={isDefaultMode ? 12 : 20}
      />
      <Title variant="h5" color={isDefaultMode ? "darkPurple" : "bluePurple"}>
        {location}
      </Title>
    </HStack>
  );
};
