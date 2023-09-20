import React from "react";

import { IconTrash } from "@frenchies-spots/icon";

import type { SpotButtonBaseProps } from "../SpotButtonBase/SpotButtonBase";

import { useMutation } from "@apollo/client";

import {
  DeleteResponse,
  MutationDeleteSpotArgs,
  mutations,
  queries,
} from "@frenchies-spots/gql";

import SpotButtonBase from "../SpotButtonBase/SpotButtonBase";
import ModalComfirm from "../../../Popup/ModalComfirm/ModalComfirm";
import { client } from "../../../../utils/client.gql";
import toast from "react-hot-toast";

interface DeleteButtonProps extends Omit<SpotButtonBaseProps, "children"> {
  spotId: string;
}

const DeleteButton = (props: DeleteButtonProps) => {
  const { spotId, ...other } = props;

  const [deleteSpot, { loading }] = useMutation<
    {
      deleteSpot: DeleteResponse;
    },
    MutationDeleteSpotArgs
  >(mutations.deleteSpot, {
    refetchQueries: [queries.spots],
  });

  const handleDeleteClick = () => {
    toast.promise(
      deleteSpot({ variables: { id: spotId } }).then(() => {
        client.cache.evict({ id: `SpotEntity:${spotId}` });
      }),
      {
        loading: "Supression...",
        success: <b>Spot supprimé avec succès.</b>,
        error: <b>La suppression à échoué.</b>,
      }
    );
  };

  return (
    <ModalComfirm onComfirm={handleDeleteClick}>
      {(open) => (
        <SpotButtonBase
          {...other}
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
          loading={loading}
        >
          <IconTrash style={{ color: "#df2020" }} />
        </SpotButtonBase>
      )}
    </ModalComfirm>
  );
};

export default DeleteButton;
