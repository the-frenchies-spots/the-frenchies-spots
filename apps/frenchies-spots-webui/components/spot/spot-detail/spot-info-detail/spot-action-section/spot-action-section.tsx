import React from "react";
import { Box, PrimaryButton } from "@frenchies-spots/materials";
import { FavoriteButton } from "../../../../app";
import { styles } from "../spot-info-detail-style";
import { useTranslation } from "react-i18next";

interface SpotActionSectionProps {
  spotId: string;
  isUserOwner: boolean;
}

export const SpotActionSection = (props: SpotActionSectionProps) => {
  const { spotId, isUserOwner } = props;
  const { t } = useTranslation();

  return (
    <Box style={styles.detailsActionContainer}>
      {!isUserOwner && <FavoriteButton spotId={spotId} isFavorite={false} />}
      <PrimaryButton
        icon="map"
        style={{
          ...styles.viewInMapButton,
          marginLeft: isUserOwner ? 0 : 20,
        }}
      >
        {t(`pages.spot.mapButtonLabel`)}
      </PrimaryButton>
    </Box>
  );
};
