import React, { useCallback } from "react";
import {
  Page,
  type SpotEditFormValues,
  SpotEditForm,
} from "../../../components";
import { useMutation } from "@apollo/client";
import { CREATE_SPOT_MUTATION, READ_SPOT_QUERY } from "../../../graphql";
import { useCloudinary, useNavigation } from "../../../hooks";
import { CreateSpotRequestParameters } from "../../../types";

export const CreateSpotPage = () => {
  const { navigateTo } = useNavigation();

  const [createSpot, { loading }] = useMutation(CREATE_SPOT_MUTATION, {
    // refetchQueries: [{ query: READ_SPOT_QUERY }, "spots"],
  });

  const handleCreateSpotSubmit = async (
    variables: CreateSpotRequestParameters
  ) => {
    createSpot({ variables })
      .then((result) => {
        const createId = result?.data?.createSpot?.id;
        navigateTo("map", { id: createId });
      })
      .catch(console.error);
  };

  return (
    <Page isPadding={false} opacity={1} isBackground={false} isNavBar={false}>
      <SpotEditForm onSubmitForm={handleCreateSpotSubmit} />
    </Page>
  );
};
