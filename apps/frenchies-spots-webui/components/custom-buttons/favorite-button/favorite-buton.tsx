import React, { useMemo } from "react";
import { useMutation } from "@apollo/client";
import { Box } from "@react-native-material/core";
import { TouchableOpacity } from "react-native";
import { TOGGLE_FAVORITE_MUTATION } from "../../../graphql";
import { useTheme } from "../../../hooks";
import { Icon } from "../../../materials/icon";
import { SpotType } from "../../../types";
import { styles } from "./favorite-button-style";

type FavoriteButtonProps = {
  style?: Record<string, string | number>;
  spot: SpotType;
};

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { style: extStyle, spot } = props;
  const { id: spotId, favorites = [] } = spot;
  const style = useTheme(styles);

  const favoriteId: string | undefined = useMemo(
    () => favorites.find((fav) => fav.spotId === spotId)?.id,
    [spotId, favorites]
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE_MUTATION);

  const handleToggleClick = () => {
    toggleFavorite({
      variables: { spotId, id: favoriteId ? favoriteId : "" },
    });
  };

  return (
    <>
      <TouchableOpacity onPress={handleToggleClick}>
        <Box style={{ ...style.container, ...extStyle }}>
          <Icon
            name={favoriteId ? "heart" : "cards-heart-outline"}
            size={32}
            color={style.icon.color as string}
          />
        </Box>
      </TouchableOpacity>
    </>
  );
};
