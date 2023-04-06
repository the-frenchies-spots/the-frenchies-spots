import React, { useContext } from "react";
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Box, Card, CardButton } from "@frenchies-spots/materials";
import { styles } from "./spot-list-styles";
import { SpotType } from "../../../types";
import { EditButton, FavoriteButton } from "../../app";
import { AuthContext } from "../../../context";
import { useNavigation } from "../../../hooks";
type SxProps = ViewStyle | TextStyle | ImageStyle;

interface SpotListProps {
  spotList?: SpotType[];
  style?: SxProps;
  isEdition?: boolean;
  favoriteDisabled?: boolean;
  favoriteEnabled?: boolean;
}

export const SpotList = (props: SpotListProps) => {
  const {
    spotList,
    style,
    isEdition = false,
    favoriteDisabled = false,
    favoriteEnabled = false,
  } = props;
  const { navigateTo } = useNavigation();
  const { currentUser } = useContext(AuthContext);

  return (
    <Box style={{ ...styles.listContainer, ...style }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, marginBottom: 320 }}
        showsVerticalScrollIndicator={false}
      >
        {spotList?.map((spot, index) => {
          const isUserOwner = spot.profileId === currentUser?.profileId;
          return (
            <Card
              key={index}
              onPress={() => navigateTo("spot", { id: spot.id })}
              name={spot.name}
              description={spot.description}
              averageRating={spot.averageRating}
              isCanPark={spot.isCanPark}
              picture={spot.spotPicture[0] && spot.spotPicture[0].url}
              cardButton={
                isEdition ? (
                  <EditButton spotId={spot.id} />
                ) : (
                  <>
                    {currentUser && !favoriteDisabled && !isUserOwner && (
                      <FavoriteButton
                        spotId={spot.id}
                        favoriteId={spot.favorites[0]?.id || ""}
                      />
                    )}
                  </>
                )
              }
              style={styles.spotCard}
            />
          );
        })}
      </ScrollView>
    </Box>
  );
};
