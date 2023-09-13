import React from "react";

import { IconPencil } from "@frenchies-spots/icon";

import type { SpotButtonBaseProps } from "../SpotButtonBase/SpotButtonBase";

import SpotButtonBase from "../SpotButtonBase/SpotButtonBase";
import { useRouter } from "next/router";

interface EditButtonProps extends Omit<SpotButtonBaseProps, "children"> {
  spotId: string;
}

const EditButton = (props: EditButtonProps) => {
  const { spotId, ...other } = props;

  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    router.push(`/spots/edition/${spotId}`);
  };

  return (
    <SpotButtonBase {...other} onClick={handleClick}>
      <IconPencil />
    </SpotButtonBase>
  );
};

export default EditButton;
