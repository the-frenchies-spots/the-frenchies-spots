import React from "react";
import { CardButton, type CardButtonProps } from "@frenchies-spots/materials";
import { useNavigation } from "../../../../hooks";

interface AuthButtonProps extends CardButtonProps {}

export const AuthButton = (props: AuthButtonProps) => {
  const { navigateTo } = useNavigation();

  return (
    <CardButton
      icon="user"
      onPress={() => navigateTo("profile")}
      color="purple"
    />
  );
};
