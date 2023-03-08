import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useIsFocused } from "@react-navigation/native";
import { READ_SPOT_QUERY } from "../../graphql";
import { useTheme, useMediaQuery, useNavigation } from "../../hooks";
import { PageLayout } from "../../layout";
import { Box, Typography } from "../../materials";
import { ReadAllSpotRequestResult, SpotType } from "../../types";
import { styles } from "./profile-spot-page-style";
import { AuthContext } from "../../context";
import { SpotList } from "../../components/spot-list/spot-list";
import { isEmpty } from "lodash";

export const ProfileSpotPage = () => {
  const { isPhone, isTablette } = useMediaQuery();

  const { navigateTo } = useNavigation();
  const { currentUser } = useContext(AuthContext);
  const [profileSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const isFocused = useIsFocused();

  const style = useTheme(styles, { isPhone, isTablette });

  useEffect(() => {
    if (currentUser !== undefined) {
      const { profileId } = currentUser;
      profileSpots({ variables: { profileId }, fetchPolicy: "no-cache" });
    }
  }, [currentUser, isFocused]);

  return (
    <PageLayout
      isAppBar={true}
      isBackground={false}
      isScrollable={true}
      direction={undefined}
      justify={undefined}
      align="center"
      pv={40}
      ph={16}
    >
      <Box style={style.container}>
        <Typography style={style.title} variant="h5">
          Mes Spots
        </Typography>
        {isEmpty(data?.spots) ? (
          <Typography>Vous n'avez créé aucun spots</Typography>
        ) : (
          <>
            {loading ? (
              <Typography> Loading... </Typography>
            ) : (
              <SpotList data={data?.spots} isLoading={loading} />
            )}
          </>
        )}
      </Box>
    </PageLayout>
  );
};
