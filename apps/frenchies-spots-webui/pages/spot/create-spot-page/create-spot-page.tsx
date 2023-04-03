import React, { useCallback } from "react";
import {
  Page,
  type SpotEditFormValues,
  SpotEditForm,
} from "../../../components";
import { useMutation } from "@apollo/client";
import { CREATE_SPOT_MUTATION, READ_SPOT_QUERY } from "../../../graphql";
import { useCloudinary } from "../../../hooks";
import { CreateSpotRequestParameters } from "../../../types";

export const CreateSpotPage = () => {
  const [createSpot, { loading }] = useMutation(CREATE_SPOT_MUTATION, {
    // refetchQueries: [{ query: READ_SPOT_QUERY }, "spots"],
  });

  const handleCreateSpotSubmit = async (
    variables: CreateSpotRequestParameters
  ) => {
    console.log("******************");
    console.log(variables);
    console.log("******************");
    createSpot({ variables })
      .then((result) => {
        console.log("******************");
        console.log("Félicitation le spot à bien été crée !");
        console.log({ result });
        console.log("******************");
      })
      .catch(console.error);
  };

  return (
    <Page isPadding={false} opacity={1} isBackground={false} isNavBar={false}>
      <SpotEditForm onSubmitForm={handleCreateSpotSubmit} />
    </Page>
  );
};
