import React from "react";
import { CardButton } from "@frenchies-spots/materials";

interface DeleteButtonProps {
  spotId: string;
}
export const DeleteButton = (props: DeleteButtonProps) => {
  const { spotId } = props;
  return <CardButton icon="trash-can-outline" color="error" />;
};
