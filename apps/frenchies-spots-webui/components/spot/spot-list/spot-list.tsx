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
type SxProps = ViewStyle | TextStyle | ImageStyle;

interface SpotListProps {
  spotList?: SpotType[];
  style?: SxProps;
  isEdition?: boolean;
}

export const SpotList = (props: SpotListProps) => {
  const { spotList, style, isEdition = false } = props;
  const { currentUser } = useContext(AuthContext);

  return (
    <Box style={{ ...styles.listContainer, ...style }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {spotList?.map((spot, index) => {
          return (
            <Card
              key={index}
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
                    {currentUser && (
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
