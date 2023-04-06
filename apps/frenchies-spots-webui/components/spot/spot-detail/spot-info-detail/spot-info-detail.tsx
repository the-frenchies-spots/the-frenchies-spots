import React, { useContext } from "react";
import { Box, VStack, Title, BodyText, Text } from "@frenchies-spots/materials";
import { styles } from "./spot-info-detail-style";
import { SpotHeadSection } from "./spot-head-section";
import { SpotActionSection } from "./spot-action-section";
import { useTranslation } from "react-i18next";
import { ITag, ITags, Rating } from "../../../../types";
import { AuthContext } from "../../../../context";
import { SelectSpotTag } from "../../../custom-input";
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

interface SpotInfoDetailProps {
  spotId: string;
  title?: string;
  description?: string;
  location?: string;
  isUserOwner: boolean;
  actionSectionDisabled?: boolean;
  rate?: Rating;
  averageRating?: number;
  maxVote?: number;
  favoriteId?: string;
  tags?: ITag[];
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
    tags,
  } = props;
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  return (
    <Box style={styles.container}>
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

      <VStack spacing={20} style={{ marginTop: 20 }}>
        <Box>
          {tags && (
            <SelectSpotTag
              list={tags?.map((item) => item.tag)}
              value={[]}
              disabled
            />
          )}
        </Box>
        <Box>
          <Title variant="h3">{t(`pages.spot.descriptionLabel`)}</Title>
        </Box>

        <ScrollView
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
        >
          <Box>
            <BodyText>{description}</BodyText>
          </Box>
          {!actionSectionDisabled && currentUser && (
            <SpotActionSection
              spotId={spotId}
              isUserOwner={isUserOwner}
              favoriteId={favoriteId}
            />
          )}
        </ScrollView>
      </VStack>
    </Box>
  );
};
