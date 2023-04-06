import React, { useMemo, useState } from "react";
import { CardButton } from "@frenchies-spots/materials";
import { useMutation } from "@apollo/client";
import { TOGGLE_FAVORITE_MUTATION } from "../../../../graphql";

interface FavoriteButtonProps {
  spotId: string;
  favoriteId: string;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { favoriteId: initFavoriteId, spotId } = props;

  const [favoriteId, setFavoriteId] = useState<string>(initFavoriteId);

  const [toggleFavorite, { loading }] = useMutation(TOGGLE_FAVORITE_MUTATION);

  const handleToggleClick = () => {
    toggleFavorite({
      variables: { spotId, id: favoriteId },
    }).then((result) => {
      console.log(result);
      const favorites = result?.data?.favoriteSpot?.favorites;
      if (favorites.length) {
        const newFavoriteId = favorites[0]?.id;
        console.log({ newFavoriteId });
        setFavoriteId(newFavoriteId);
      } else {
        setFavoriteId("");
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
