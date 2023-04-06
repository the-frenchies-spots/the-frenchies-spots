import React, { useContext, useEffect, useState } from "react";
import { InfoBar, Page, SpotList } from "../../../components";
import { Box, FilterInput, Title } from "@frenchies-spots/materials";
import { useIsFocused } from "@react-navigation/native";
import { useLazyQuery } from "@apollo/client";
import { ReadAllSpotRequestResult } from "../../../types";
import { READ_SPOT_QUERY } from "../../../graphql";
import { AuthContext } from "../../../context";
import { styles } from "./spot-user-page-styles";

export const SpotUserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [getUserSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (currentUser !== undefined) {
      const { profileId } = currentUser;
      getUserSpots({ variables: { profileId }, fetchPolicy: "no-cache" });
    }
  }, [currentUser, isFocused]);

  const handleToggleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Page opacity={1} isPadding={false}>
      <Box style={styles.container}>
        <InfoBar displayLocation={false} />
        <FilterInput onSearchPress={handleToggleOpen} />
        <Box style={styles.title}>
          <Title variant="h4">Mes spots</Title>
        </Box>
      </Box>

      <SpotList spotList={data?.spots} isEdition />
    </Page>
  );
};
