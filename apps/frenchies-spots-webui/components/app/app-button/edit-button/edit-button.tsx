import React from "react";
import { CardButton } from "@frenchies-spots/materials";

interface EditButtonProps {
  spotId: string;
}

export const EditButton = (props: EditButtonProps) => {
  const { spotId } = props;
  return <CardButton icon="edit" />;
};
