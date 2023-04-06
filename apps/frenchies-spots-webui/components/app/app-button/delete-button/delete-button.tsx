import React from "react";
import { CardButton } from "@frenchies-spots/materials";
import { DELETE_SPOT_MUTATION } from "../../../../graphql";
import { useMutation } from "@apollo/client";
import { useNavigation } from "../../../../hooks";
import Toast from "react-native-root-toast";

interface DeleteButtonProps {
  spotId: string;
}
export const DeleteButton = (props: DeleteButtonProps) => {
  const { spotId } = props;
  const { navigateTo } = useNavigation();

  const [deleteSpot, { loading }] = useMutation(DELETE_SPOT_MUTATION, {
    variables: { id: spotId },
  });

  const handleDeleteSpot = () => {
    let text = "Êtes vous sûres de vouloir supprimer ce spot ?";
    if (confirm(text) == true) {
      deleteSpot().then(() => {
        Toast.show(`Votre spot à bien été supprimer`, {
          position: Toast.positions.TOP,
          duration: Toast.durations.LONG,
        });
        navigateTo("spotUser");
      });
    }
  };

  return (
    <CardButton
      icon="trash-can-outline"
      color="error"
      onPress={handleDeleteSpot}
      isLoading={loading}
    />
  );
};
