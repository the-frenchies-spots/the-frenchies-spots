import React, { useContext, useEffect, useState } from "react";
import { InfoBar, Page, SpotList } from "../../../components";
import {
  Box,
  FilterInput,
  Icon,
  Loader,
  PrimaryButton,
  Text,
  Title,
} from "@frenchies-spots/materials";
import { useIsFocused } from "@react-navigation/native";
import { useLazyQuery } from "@apollo/client";
import { ReadAllSpotRequestResult } from "../../../types";
import { READ_SPOT_QUERY } from "../../../graphql";
import { AuthContext } from "../../../context";
import { styles } from "./spot-user-page-styles";
import { useNavigation } from "../../../hooks";

export const SpotUserPage = () => {
  const { currentUser } = useContext(AuthContext);
  const { navigateTo } = useNavigation();

  const [getUserSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (currentUser !== undefined) {
      const { profileId } = currentUser;
      getUserSpots({ variables: { profileId }, fetchPolicy: "no-cache" });
    }
  }, [currentUser, isFocused]);

  return (
    <Page opacity={1} isPadding={false}>
      <Box style={styles.container}>
        <InfoBar displayLocation={false} />
        <Box>
          <PrimaryButton
            contentStyle={{
              height: 65,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigateTo("createSpot")}
          >
            <Icon name="map-marker-plus" color="white" />
            <Text style={{ marginLeft: 5 }}> CRÉER UN SPOT </Text>
          </PrimaryButton>
        </Box>
        <Box style={styles.title}>
          <Title variant="h4">Mes spots</Title>
        </Box>
      </Box>
      {loading ? (
        <Box style={{ padding: 100 }}>
          <Loader />
        </Box>
      ) : (
        <SpotList spotList={data?.spots} isEdition />
      )}
    </Page>
  );
};
