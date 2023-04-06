import React from "react";
import { Box, PrimaryButton } from "@frenchies-spots/materials";
import { FavoriteButton } from "../../../../app";
import { styles } from "../spot-info-detail-style";
import { useTranslation } from "react-i18next";
import { useNavigation } from "../../../../../hooks";

interface SpotActionSectionProps {
  spotId: string;
  isUserOwner: boolean;
  favoriteId: string;
}

export const SpotActionSection = (props: SpotActionSectionProps) => {
  const { spotId, isUserOwner, favoriteId } = props;
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  return (
    <Box style={styles.detailsActionContainer}>
      {!isUserOwner && (
        <FavoriteButton spotId={spotId} favoriteId={favoriteId} />
      )}
      <PrimaryButton
        icon="map"
        style={{
          ...styles.viewInMapButton,
          marginLeft: isUserOwner ? 0 : 20,
        }}
        onPress={() => navigateTo("map", { id: spotId })}
      >
        {t(`pages.spot.mapButtonLabel`)}
      </PrimaryButton>
    </Box>
  );
};
