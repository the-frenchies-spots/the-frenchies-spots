import React, { useMemo, useState } from "react";
import { CardButton } from "@frenchies-spots/materials";
import { useMutation } from "@apollo/client";
import {
  READ_ALL_FAVORITE_SPOT_QUERY,
  TOGGLE_FAVORITE_MUTATION,
} from "../../../../graphql";
import Toast from "react-native-root-toast";

interface FavoriteButtonProps {
  spotId: string;
  favoriteId: string;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { favoriteId: initFavoriteId, spotId } = props;

  const [favoriteId, setFavoriteId] = useState<string>(initFavoriteId);

  const [toggleFavorite, { loading }] = useMutation(TOGGLE_FAVORITE_MUTATION, {
    // refetchQueries: [{ query: READ_ALL_FAVORITE_SPOT_QUERY }, "spots"],
  });

  const handleToggleClick = () => {
    toggleFavorite({
      variables: { spotId, id: favoriteId },
    }).then((result) => {
      const favorites = result?.data?.favoriteSpot?.favorites;
      if (favorites.length) {
        const newFavoriteId = favorites[0]?.id;
        setFavoriteId(newFavoriteId);
        Toast.show(`Ce spot à été ajouter à vos favoris !`, {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
        });
      } else {
        setFavoriteId("");
        Toast.show(`Vous venez de retire ce spot de vos favoris`, {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
        });
      }
    });
  };

  return (
    <CardButton
      icon={favoriteId !== "" ? "heart" : "cards-heart-outline"}
      isLoading={loading}
      onPress={handleToggleClick}
    />
  );
};
