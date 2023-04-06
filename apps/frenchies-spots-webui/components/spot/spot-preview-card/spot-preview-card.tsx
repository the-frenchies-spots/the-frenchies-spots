import React from "react";
import { SpotType } from "../../../types";
import {
  Box,
  VStack,
  Image,
  CardInfo,
  HStack,
  PrimaryButton,
} from "@frenchies-spots/materials";
import { styles } from "./spot-preview-card-styles";
import { useNavigation } from "../../../hooks";

interface SpotPreviewCardProps {
  spot: SpotType;
  onViewClick?: () => void;
}

export const SpotPreviewCard = (props: SpotPreviewCardProps) => {
  const { spot, onViewClick } = props;
  const { id, spotPicture, name, averageRating, description } = spot;
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    if (typeof onViewClick === "function") {
      onViewClick();
    }
    navigateTo("spot", { id });
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.imageContainer}>
        <Image
          style={styles.image}
          src={spotPicture[0] && spotPicture[0].url}
        />
      </Box>
      <Box style={styles.infoBox}>
        <CardInfo
          name={name}
          averageRating={averageRating}
          description={description}
        />
        <PrimaryButton icon="book" style={styles.button} onPress={handleClick}>
          Consulter
        </PrimaryButton>
      </Box>
    </Box>
  );
};
