import React from "react";
import { CardButton, type CardButtonProps } from "@frenchies-spots/materials";
import { useNavigation } from "../../../../hooks";

interface EditButtonProps extends CardButtonProps {
  spotId: string;
}

export const EditButton = (props: EditButtonProps) => {
  const { spotId, ...other } = props;
  const { navigateTo } = useNavigation();

  return (
    <CardButton
      icon="edit"
      onPress={() => navigateTo("updateSpot", { id: spotId })}
      {...other}
    />
  );
};
