/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";

import { useRouter } from "next/router";
import {
  Button,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  Log,
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
import FavoriteButton from "../../components/Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "@/hooks";
import { IconStarFilled } from "@frenchies-spots/icon";
import SpotRatingStat from "../../components/Spots/SpotRating/SpotRatingStat";
import EditButton from "../../components/Spots/SpotButton/EditButton/EditButton";
import DeleteButton from "../../components/Spots/SpotButton/DeleteButton/DeleteButton";
import { SelectTag } from "../../components/InputCustom";
import { tagsDataList } from "@frenchies-spots/utils";
import { DisplayTag } from "../../components/Spots/DisplayTag";

const SpotDetailPage = () => {
  const router = useRouter();
  const { spotId } = router.query;
  const { profile } = useAuth();

  const id = spotId as string;

  const [getSpotByPk, { data, loading }] = useLazyQuery<
    { spotByPk: SpotByIdResponse },
    QuerySpotByPkArgs
  >(queries.spotByPk);

  useEffect(() => {
    if (id !== undefined) {
      getSpotByPk({
        variables: { id },
      });
    }
  }, [id]);

  const handleGoSpotClick = () => {
    const lat = data?.spotByPk?.location?.coordinates[1];
    const lng = data?.spotByPk?.location?.coordinates[0];
    router.push(`/spots?lat=${lat}&lng=${lng}&spotId=${id}`);
  };

  const userIsOwner = profile?.id === data?.spotByPk?.profileId;
  const tags = data?.spotByPk?.tags?.map(({ tag }) => tag.id);

  return (
    <>
      <LoadingOverlay visible={loading} />
      {data?.spotByPk && (
        <Container size="md" p={0}>
          <SpotPictureSwiper pictures={data.spotByPk?.spotPicture} />

          <Stack p="md">
            <Group position="apart">
              <Text>{data.spotByPk?.name}</Text>
              {userIsOwner && (
                <Group>
                  <EditButton spotId={id} />
                  <DeleteButton spotId={id} />
                </Group>
              )}
            </Group>

            {!userIsOwner ? (
              <SpotRating id={id} rating={data.spotByPk?.rating} />
            ) : (
              <SpotRatingStat rating={data.spotByPk?.rating} withIcon />
            )}

            <Text>{data.spotByPk?.address}</Text>

            <DisplayTag value={tags} position="left" list={tagsDataList} />

            <Text>Description</Text>
            <Text>{data.spotByPk?.description}</Text>

            <Flex gap="md">
              {data?.spotByPk?.favorites && !userIsOwner && (
                <FavoriteButton
                  favorite={{
                    spotId: id,
                    favoriteId: data?.spotByPk?.favorites[0]?.id,
                  }}
                />
              )}
              <Button sx={{ flexGrow: 1 }} onClick={handleGoSpotClick}>
                Voir sur la carte
              </Button>
            </Flex>
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
