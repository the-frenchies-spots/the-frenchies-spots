import React, { useContext, useEffect } from "react";
import { InfoBar, Page, SpotList } from "../../../components";
import { Box, Loader, Title } from "@frenchies-spots/materials";
import { useIsFocused } from "@react-navigation/native";
import { useLazyQuery } from "@apollo/client";
import {
  FavoriteRequestResult,
  ReadAllSpotRequestResult,
  SpotType,
} from "../../../types";
import {
  READ_ALL_FAVORITE_SPOT_QUERY,
  READ_SPOT_QUERY,
} from "../../../graphql";
import { AuthContext } from "../../../context";
import { styles } from "./spot-favorite-page-styles";

export const SpotFavoritePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log({ currentUser });

  const [getFavoriteSpots, { data, loading }] =
    useLazyQuery<FavoriteRequestResult>(READ_ALL_FAVORITE_SPOT_QUERY);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (currentUser !== undefined) {
      const { profileId } = currentUser;
      getFavoriteSpots({ variables: { profileId }, fetchPolicy: "no-cache" });
    }
  }, [currentUser, isFocused]);

  return (
    <Page opacity={1} isPadding={false}>
      <Box style={styles.container}>
        <InfoBar displayLocation={false} />

        <Box style={styles.title}>
          <Title variant="h4">Mes Favoris</Title>
        </Box>
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data && data?.profile?.favorites && (
            <SpotList
              spotList={data?.profile?.favorites?.map(
                (item) =>
                  ({
                    ...item.spot,
                    favorites: [{ id: item.id }],
                  } as SpotType)
              )}
            />
          )}
        </>
      )}
    </Page>
  );
};
