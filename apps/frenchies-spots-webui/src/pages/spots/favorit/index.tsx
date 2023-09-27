import React, { ReactElement, useState } from "react";

import { PageLayout } from "../../../components";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";

import { useQuery } from "@apollo/client";
import { SpotEntity, queries } from "@frenchies-spots/gql";
import { Container, InputForm } from "@frenchies-spots/material";

import SpotList from "../../../components/Spots/SpotList/SpotList";
import FavoriteButton from "../../../components/Spots/SpotButton/FavoriteButton/FavoriteButton";
import StatusBar from "../../../components/StatusBar/StatusBar";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";
import { IconSearch } from "@frenchies-spots/icon";

const FavoritPage = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  const { data, loading, refetch } = useQuery<{
    spotsFavorite: SpotEntity[];
  }>(queries.spotsFavorite);

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Container size="md" mt="md">
        <StatusBar />
        <InputForm
          pt="md"
          pb="xl"
          placeholder="Rechercher un spot"
          onChange={(e) => setSearchKey(e.currentTarget.value)}
          sx={{ borderColor: "#A480A6" }}
          isShadow={false}
          icon={<IconSearch style={{ color: "#A480A6" }} size={20} />}
        />
      </Container>
      <SpotList
        list={data?.spotsFavorite?.filter((_spot) =>
          _spot.name.includes(searchKey)
        )}
      >
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
