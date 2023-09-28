import React, { useState } from "react";

import { IconHeart, IconHeartFilled } from "@frenchies-spots/icon";

import { useMutation } from "@apollo/client";
import {
  MutationToggleFavoriteArgs,
  ToggleFavoriteResponse,
  mutations,
  queries,
} from "@frenchies-spots/gql";
import SpotButtonBase, {
  SpotButtonBaseProps,
} from "../SpotButtonBase/SpotButtonBase";
import ModalComfirm from "../../../Popup/ModalComfirm/ModalComfirm";
import { client } from "../../../../utils/client.gql";

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
    {
      toggleFavorite: ToggleFavoriteResponse;
    },
    MutationToggleFavoriteArgs
  >(mutations.toggleFavorite, {
    refetchQueries: [queries.spots, queries.spotsFavorite],
  });

  const handleFavoriteClick = () => {
    const { favoriteId, spotId } = favorite;

    toggleFavorite({
      variables: { favoriteInput: { favoriteId, spotId } },
    }).then((result) => {
      if (favoriteId) {
        client.cache.evict({ id: `FavoriteEntity:${favoriteId}` });
      }
      const id = result?.data?.toggleFavorite?.favoriteId || undefined;
      setFavorite((prev) => ({ ...prev, favoriteId: id }));
      if (typeof onClick === "function") {
        onClick();
      }
    });
  };

  return (
    <ModalComfirm onComfirm={handleFavoriteClick}>
      {(open) => (
        <SpotButtonBase
          {...other}
          onClick={(e) => {
            e.stopPropagation();
            withComfirm ? open() : handleFavoriteClick();
          }}
          loading={loading}
        >
          {favorite?.favoriteId ? (
            <IconHeartFilled style={{ color: "#EBA701" }} />
          ) : (
            <IconHeart style={{ color: "#EBA701" }} />
          )}
        </SpotButtonBase>
      )}
    </ModalComfirm>
  );
};

export default FavoriteButton;
