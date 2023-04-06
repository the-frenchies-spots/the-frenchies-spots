import React from "react";
import { Box, VStack, Title, BodyText } from "@frenchies-spots/materials";
import { styles } from "./spot-info-detail-style";
import { SpotHeadSection } from "./spot-head-section";
import { SpotActionSection } from "./spot-action-section";
import { useTranslation } from "react-i18next";
import { Rating } from "../../../../types";

interface SpotInfoDetailProps {
  spotId: string;
  title?: string;
  description?: string;
  location: string;
  isUserOwner: boolean;
  actionSectionDisabled?: boolean;
  rate?: Rating;
  averageRating?: number;
  maxVote?: number;
  favoriteId?: string;
}

export const SpotInfoDetail = (props: SpotInfoDetailProps) => {
  const {
    spotId,
    title = "",
    description = "",
    location,
    isUserOwner,
    actionSectionDisabled = false,
    rate,
    averageRating,
    maxVote,
    favoriteId = "",
  } = props;

  const { t } = useTranslation();

  return (
    <VStack style={styles.container} spacing={20}>
      <Box>
        <SpotHeadSection
          spotId={spotId}
          title={title}
          isUserOwner={isUserOwner}
          location={location}
          rate={rate}
          averageRating={averageRating}
          maxVote={maxVote}
        />
      </Box>

      <Box>
        <Title variant="h3">{t(`pages.spot.descriptionLabel`)}</Title>
      </Box>
      <Box>
        <BodyText>{description}</BodyText>
      </Box>
      {!actionSectionDisabled && (
        <SpotActionSection
          spotId={spotId}
          isUserOwner={isUserOwner}
          favoriteId={favoriteId}
        />
      )}
    </VStack>
  );
};
