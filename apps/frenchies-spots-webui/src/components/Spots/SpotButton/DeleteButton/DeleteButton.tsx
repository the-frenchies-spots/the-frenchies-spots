import React, { MouseEventHandler, useEffect, useState } from "react";

import { IconTrash } from "@frenchies-spots/icon";

import type { SpotButtonBaseProps } from "../SpotButtonBase/SpotButtonBase";

import { useMutation } from "@apollo/client";

import {
  FavoriteEntity,
  MutationToggleFavoriteArgs,
  SpotEntity,
  ToggleFavoriteResponse,
  mutations,
} from "@frenchies-spots/gql";

import SpotButtonBase from "../SpotButtonBase/SpotButtonBase";

interface DeleteButtonProps extends Omit<SpotButtonBaseProps, "children"> {
  spotId: string;
}

const DeleteButton = (props: DeleteButtonProps) => {
  const { spotId, ...other } = props;

  const loading = false;

  const handleDeleteClick = () => {};

  return (
    <SpotButtonBase {...other} onClick={handleDeleteClick} loading={loading}>
      <IconTrash />
    </SpotButtonBase>
  );
};

export default DeleteButton;
