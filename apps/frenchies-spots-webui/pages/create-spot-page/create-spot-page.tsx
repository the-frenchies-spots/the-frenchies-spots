import React, { useContext } from "react";
import { PageLayout } from "../../layout";
import { styles } from "./create-spot-style";
import { Container } from "../../materials";
import { useTheme, useMediaQuery, useNavigation } from "../../hooks";
import {
  CreateSpotRequestParameters,
  UpdateSpotRequestParameters,
} from "../../types";
import SpotForm from "../../components/spot-form/spot-form";
import { AuthContext } from "../../context";
import { CREATE_SPOT_MUTATION, READ_SPOT_QUERY } from "../../graphql";
import { useMutation } from "@apollo/client";

export const CreateSpotPage = () => {
  const [createSpot, { loading }] = useMutation(CREATE_SPOT_MUTATION, {
    refetchQueries: [{ query: READ_SPOT_QUERY }, "spots"],
  });

  const { isPhone } = useMediaQuery();
  const { navigateTo } = useNavigation();
  const style = useTheme(styles, isPhone);
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (
    data: CreateSpotRequestParameters | UpdateSpotRequestParameters
  ) => {
    createSpot({ variables: { ...data } })
      .then(() => {
        navigateTo("profileSpot");
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
        <SpotForm isLoading={loading} onSumbit={handleSubmit} />
      </Container>
    </PageLayout>
  );
};
