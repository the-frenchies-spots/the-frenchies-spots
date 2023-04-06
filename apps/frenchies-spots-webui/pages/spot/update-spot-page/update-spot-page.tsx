import React, { useCallback, useMemo } from "react";
import {
  Page,
  type SpotEditFormValues,
  SpotEditForm,
} from "../../../components";
import { useMutation, useQuery } from "@apollo/client";
import { READ_SPOT_BY_ID_QUERY, UPDATE_SPOT_MUTATION } from "../../../graphql";
import {
  CreateSpotRequestParameters,
  ReadOneSpotRequestResult,
} from "../../../types";
import { useNavigation } from "../../../hooks";

interface UpdateSpotPageProps {
  route?: { params: { id: string } };
}

export const UpdateSpotPage = (props: UpdateSpotPageProps) => {
  const { route } = props;
  const id = route?.params?.id;

  const { navigateTo } = useNavigation();
  const { data, loading: loadingGetById } = useQuery<ReadOneSpotRequestResult>(
    READ_SPOT_BY_ID_QUERY,
    { variables: { id } }
  );

  console.log({ data });

  const [updateSpot, { loading }] = useMutation(UPDATE_SPOT_MUTATION, {
    // refetchQueries: [{ query: READ_SPOT_QUERY }, "spots"],
  });

  const defaultValues: SpotEditFormValues | undefined = useMemo(() => {
    if (!data) return undefined;
    const { lat, lng, region, spotPicture, tags, ...other } = data.spot;
    return {
      location: {
        coordinate: { lat, lng },
        codeRegion: +region,
        address: "no where",
      },
      pictures: spotPicture.map((picture) => picture.url),
      tags: tags.map((tagOnSpot) => tagOnSpot.tag.id),
      ...other,
    };
  }, [data]);

  const handleUpdateSpotSubmit = async (
    variables: CreateSpotRequestParameters
  ) => {
    updateSpot({ variables: { ...variables, id } })
      .then(() => {
        if (id) navigateTo("map", { id });
      })
      .catch(console.error);
  };

  return (
    <Page isPadding={false} opacity={1} isBackground={false} isNavBar={false}>
      {defaultValues && (
        <SpotEditForm
          onSubmitForm={handleUpdateSpotSubmit}
          data={defaultValues}
        />
      )}
    </Page>
  );
};
