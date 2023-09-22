import React, { ReactElement } from "react";

import { PageLayout } from "../../../components";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";

import { useQuery } from "@apollo/client";
import { SpotEntity, queries } from "@frenchies-spots/gql";
import { Container } from "@frenchies-spots/material";

import SpotList from "../../../components/Spots/SpotList/SpotList";
import FavoriteButton from "../../../components/Spots/SpotButton/FavoriteButton/FavoriteButton";
import StatusBar from "../../../components/StatusBar/StatusBar";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";

const FavoritPage = () => {
  const { data, loading, refetch } = useQuery<{
    spotsFavorite: SpotEntity[];
  }>(queries.spotsFavorite);

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Container size="md" mt="md">
        <StatusBar />
      </Container>
      <SpotList list={data?.spotsFavorite}>
        {({ spotId, favoriteId }) => (
          <FavoriteButton
            favorite={{ spotId, favoriteId }}
            onClick={refetch}
            withComfirm
          />
        )}
      </SpotList>
    </>
  );
};

export default FavoritPage;

FavoritPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};
