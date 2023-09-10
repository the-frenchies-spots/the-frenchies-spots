import React, { ReactElement } from "react";

import { PageLayout } from "../../../components";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";

import { useQuery } from "@apollo/client";
import { SpotEntity, queries } from "@frenchies-spots/gql";
import { Button, LoadingOverlay } from "@frenchies-spots/material";

import SpotList from "../../../components/Spots/SpotList/SpotList";
import FavoriteButton from "../../../components/Spots/SpotButton/FavoriteButton/FavoriteButton";

const FavoritPage = () => {
  const { data, loading } = useQuery<{
    spotsFavorite: SpotEntity[];
  }>(queries.spotsFavorite);

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <SpotList list={data?.spotsFavorite}>
        {({ spotId, favoriteId }) => (
          <FavoriteButton favorite={{ spotId, favoriteId }} withComfirm />
        )}
      </SpotList>
    </>
  );
};

export default FavoritPage;

FavoritPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
