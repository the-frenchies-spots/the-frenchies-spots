import React, { useContext, useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import { useIsFocused } from "@react-navigation/native";
import { READ_ALL_FAVORITE_SPOT_QUERY, READ_SPOT_QUERY } from "../../graphql";
import { useTheme, useMediaQuery, useNavigation } from "../../hooks";
import { PageLayout } from "../../layout";
import { Box, Typography } from "../../materials";
import { FavoriteRequestResult } from "../../types";
import { styles } from "./favorite-spot-page-style";
import { AuthContext } from "../../context";
import { SpotList } from "../../components/spot-list/spot-list";
import { isEmpty } from "lodash";

export const FavoriteSpotPage = () => {
  const { isPhone, isTablette } = useMediaQuery();
  const { currentUser } = useContext(AuthContext);
  const [favoriteSpot, { data: favoritList, loading }] =
    useLazyQuery<FavoriteRequestResult>(READ_ALL_FAVORITE_SPOT_QUERY);
  const spots = useMemo(
    () => favoritList?.profile?.favorites.map((fav) => fav.spot) || [],
    [favoritList]
  );

  const isFocused = useIsFocused();

  const style = useTheme(styles, { isPhone, isTablette });

  useEffect(() => {
    if (currentUser !== undefined) {
      const { profileId } = currentUser;
      favoriteSpot({ variables: { profileId }, fetchPolicy: "no-cache" });
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
          Mes Favoris
        </Typography>
        {isEmpty(spots) ? (
          <Typography>Vous n'avez ajouté aucun spots à vos favoris</Typography>
        ) : (
          <>
            {loading ? (
              <Typography> Loading... </Typography>
            ) : (
              <SpotList data={spots} isLoading={loading} />
            )}
          </>
        )}
      </Box>
    </PageLayout>
  );
};
