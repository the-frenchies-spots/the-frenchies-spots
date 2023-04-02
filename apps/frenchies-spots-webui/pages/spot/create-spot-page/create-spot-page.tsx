import React, { useCallback } from "react";
import {
  Page,
  type SpotEditFormValues,
  SpotEditForm,
} from "../../../components";

export const CreateSpotPage = () => {
  const handleCreateSpotSubmit = useCallback((data: SpotEditFormValues) => {
    // code..
  }, []);

  return (
    <Page isPadding={false} opacity={1} isBackground={false} isNavBar={false}>
      <SpotEditForm onSubmitForm={handleCreateSpotSubmit} />
    </Page>
  );
};
