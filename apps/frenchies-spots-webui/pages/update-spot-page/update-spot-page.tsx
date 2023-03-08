import React from "react";
import { PageLayout } from "../../layout";
import { styles } from "./update-spot-style";
import { Container, Typography } from "../../materials";
import { useTheme, useMediaQuery, useNavigation } from "../../hooks";
import {
  UpdateSpotRequestParameters,
  CreateSpotRequestParameters,
  ReadOneSpotRequestResult,
} from "../../types";
import SpotForm from "../../components/spot-form/spot-form";
import {
  UPDATE_SPOT_MUTATION,
  READ_SPOT_QUERY,
  READ_SPOT_BY_ID_QUERY,
} from "../../graphql";
import { useMutation, useQuery } from "@apollo/client";

interface UpdateSpotPageProps {
  route: { params: { id: string } };
}

export const UpdateSpotPage = (props: UpdateSpotPageProps) => {
  const { route } = props;
  const { id = "51c7dfba-9838-4ee1-a576-9f417a0353ae" } = route.params;

  const { data, loading: readLoading } = useQuery<ReadOneSpotRequestResult>(
    READ_SPOT_BY_ID_QUERY,
    { variables: { id } }
  );

  const [updateSpot, { loading }] = useMutation(UPDATE_SPOT_MUTATION, {
    refetchQueries: [{ query: READ_SPOT_QUERY }, "spots"],
  });

  const { isPhone } = useMediaQuery();
  const { navigateTo } = useNavigation();
  const style = useTheme(styles, isPhone);

  const handleSubmit = (
    data: CreateSpotRequestParameters | UpdateSpotRequestParameters
  ) => {
    updateSpot({ variables: { id, ...data } })
      .then(() => {
        navigateTo("spot", { id });
      })
      .catch(console.error);
  };

  return (
    <PageLayout
      isOpacity={false}
      isBackground={false}
      direction={undefined}
      justify={undefined}
      align="center"
      isScrollable={true}
      pv={40}
      ph={16}
    >
      <Container style={style.container} center>
        {data?.spot && (
          <SpotForm
            isLoading={loading}
            onSumbit={handleSubmit}
            mode="update"
            defaultValues={data}
          />
        )}
      </Container>
    </PageLayout>
  );
};
