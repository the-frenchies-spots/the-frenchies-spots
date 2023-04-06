import React, { useContext, useEffect, useState } from "react";
import { Box, HStack, Icon, Title } from "@frenchies-spots/materials";
import { AppContext } from "../../../context";

interface AddressBlockProps {
  mode?: "default" | "description";
  location?: string;
}

export const AddressBlock = (props: AddressBlockProps) => {
  const { mode = "default", location } = props;
  const isDefaultMode = mode === "default";

  const [myPlace, setMyPlace] = useState<string>("");
  const { currentPlace } = useContext(AppContext);

  useEffect(() => {
    if (!location && typeof currentPlace === "string") {
      const splitPlace = currentPlace.split(",");
      const thePlace = splitPlace.length ? splitPlace[1] : "";
      const theCountry = splitPlace.length >= 2 ? `, ${splitPlace[2]}` : "";
      setMyPlace(thePlace + theCountry);
    } else {
      if (typeof location === "string") {
        const splitPlace = location.split(",");
        const thePlace = splitPlace.length ? splitPlace[1] : "";
        const theCountry = splitPlace.length >= 2 ? `, ${splitPlace[2]}` : "";
        setMyPlace(thePlace + theCountry);
      }
    }
  }, [currentPlace, location]);

  return (
    <HStack spacing={5} items={isDefaultMode ? "center" : "end"}>
      <Icon
        name="map-marker"
        color={isDefaultMode ? "darkPurple" : "bluePurple"}
        size={isDefaultMode ? 12 : 20}
      />
      <Box style={{ width: 300 }}>
        <Title variant="h5" color={isDefaultMode ? "darkPurple" : "bluePurple"}>
          {myPlace}
        </Title>
      </Box>
    </HStack>
  );
};
