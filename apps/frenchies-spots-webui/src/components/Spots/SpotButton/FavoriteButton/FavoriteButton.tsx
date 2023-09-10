import React, { MouseEventHandler, useEffect, useState } from "react";

import { IconHeart, IconHeartFilled } from "@frenchies-spots/icon";

import { useMutation } from "@apollo/client";
import {
  FavoriteEntity,
  MutationToggleFavoriteArgs,
  SpotEntity,
  ToggleFavoriteResponse,
  mutations,
} from "@frenchies-spots/gql";
import SpotButtonBase, {
  SpotButtonBaseProps,
} from "../SpotButtonBase/SpotButtonBase";
import ModalComfirm from "../../../Popup/ModalComfirm/ModalComfirm";

export type TFavorite = { favoriteId: string | undefined; spotId: string };

interface FavoriteButtonProps extends Omit<SpotButtonBaseProps, "children"> {
  favorite: TFavorite;
  onClick?: () => void;
  withComfirm?: boolean;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const {
    favorite: initFavorite,
    withComfirm = false,
    onClick,
    ...other
  } = props;

  const [favorite, setFavorite] = useState<TFavorite>(initFavorite);

  const [toggleFavorite, { loading }] = useMutation<
    { toggleFavorite: ToggleFavoriteResponse },
    MutationToggleFavoriteArgs
  >(mutations.toggleFavorite);

  const handleFavoriteClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    const { favoriteId, spotId } = favorite;

    toggleFavorite({
      variables: { favoriteInput: { favoriteId, spotId } },
    }).then((result) => {
      const id = result?.data?.toggleFavorite?.favoriteId || undefined;

      setFavorite((prev) => ({ ...prev, favoriteId: id }));
    });
  };

  return (
    <ModalComfirm onComfirm={handleFavoriteClick}>
      {(open) => (
        <SpotButtonBase
          {...other}
          onClick={withComfirm ? open : handleFavoriteClick}
          loading={loading}
        >
          {favorite?.favoriteId ? <IconHeartFilled /> : <IconHeart />}
        </SpotButtonBase>
      )}
    </ModalComfirm>
  );
};

export default FavoriteButton;
