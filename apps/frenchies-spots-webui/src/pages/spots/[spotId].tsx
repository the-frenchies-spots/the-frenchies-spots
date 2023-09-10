/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";

import { useRouter } from "next/router";
import {
  Box,
  Container,
  Image,
  LoadingOverlay,
  Log,
  Rating,
  Stack,
  Text,
} from "@frenchies-spots/material";
import { useLazyQuery } from "@apollo/client";
import {
  QuerySpotByPkArgs,
  SpotByIdResponse,
  queries,
} from "@frenchies-spots/gql";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import SpotPicture from "./../../components/Spots/SpotPicture/SpotPicture";
import SpotPictureSwiper from "../../components/Spots/SpotPictureSwiper/SpotPictureSwiper";
import SpotRating from "../../components/Spots/SpotRating/SpotRating";

const SpotDetailPage = () => {
  const router = useRouter();
  const { spotId } = router.query;

  const [getSpotByPk, { data, loading }] = useLazyQuery<
    { spotByPk: SpotByIdResponse },
    QuerySpotByPkArgs
  >(queries.spotByPk);

  useEffect(() => {
    if (spotId !== undefined) {
      getSpotByPk({
        variables: { id: `${spotId}` },
      });
    }
  }, [spotId]);

  return (
    <>
      <LoadingOverlay visible={loading} />
      {data?.spotByPk && (
        <Container size="md" p={0}>
          <SpotPictureSwiper pictures={data.spotByPk?.spotPicture} />
          <Stack p="md">
            <Text>{data.spotByPk?.name}</Text>
            <SpotRating id={data.spotByPk?.id} rating={data.spotByPk?.rating} />
            <Text>{data.spotByPk?.address}</Text>
            <Text>Description</Text>
            <Text>{data.spotByPk?.description}</Text>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default SpotDetailPage;

SpotDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
