import React from "react";
import type { FlexProps } from "@frenchies-spots/material";

enum spotButtonMode {
  DELETE = "delete",
  EDIT = "edit",
  FAVORITE = "favorite",
}

export interface SpotButtonProps extends Omit<FlexProps, "children"> {
  spotId: string;
  favoriteId: string | undefined;
  mode: spotButtonMode;
}

const SpotButton = (props: SpotButtonProps) => {
  const { spotId, favoriteId, mode, ...other } = props;

  switch (mode) {
    case spotButtonMode.EDIT:
      return <></>;
    case spotButtonMode.EDIT:
      return <></>;
    case spotButtonMode.FAVORITE:
      return <></>;
    default:
      return <></>;
  }
};

export default SpotButton;
