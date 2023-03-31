import React from "react";
import { CardButton } from "@frenchies-spots/materials";

interface FavoriteButtonProps {
  isFavorite: boolean;
  spotId: string;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite, spotId } = props;
  return (
    <CardButton
      icon={isFavorite ? "heart" : "cards-heart-outline"}
      isLoading={false}
    />
  );
};
