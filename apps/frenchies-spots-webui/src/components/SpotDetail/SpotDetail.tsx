/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { useRouter } from "next/router";
import {
  BackButton,
  Box,
  Container,
  Flex,
  Font,
  Group,
  PrimaryButton,
  Stack,
} from "@frenchies-spots/material";
import { SpotByIdResponse, SpotEntity } from "@frenchies-spots/gql";
import SpotPictureSwiper from "../../components/Spots/SpotPictureSwiper/SpotPictureSwiper";
import SpotRating from "../../components/Spots/SpotRating/SpotRating";
import FavoriteButton from "../../components/Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "@/hooks";
import { IconMap2, IconMapPinFilled } from "@frenchies-spots/icon";
import SpotRatingStat from "../../components/Spots/SpotRating/SpotRatingStat";
import EditButton from "../../components/Spots/SpotButton/EditButton/EditButton";
import DeleteButton from "../../components/Spots/SpotButton/DeleteButton/DeleteButton";
import { tagsDataList } from "@frenchies-spots/utils";
import { DisplayTag } from "../../components/Spots/DisplayTag";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import SpotBadges from "../Spots/SpotBadges/SpotBadges";

interface SpotDetailProps {
  spot: SpotByIdResponse | undefined;
  loading?: boolean;
  isPreviewMode?: boolean;
}

const SpotDetail = (props: SpotDetailProps) => {
  const { spot, loading = false, isPreviewMode = false } = props;

  const router = useRouter();
  const { profile } = useAuth();

  const handleGoSpotClick = () => {
    const lat = spot?.location?.coordinates[1];
    const lng = spot?.location?.coordinates[0];
    router.push(`/spots?lat=${lat}&lng=${lng}&spotId=${spot?.id}`);
  };

  const userIsOwner = profile?.id === spot?.profileId;
  const tags = spot?.tags?.map(({ tag }) => tag.id);

  return (
    <>
      <LoadingOverlay visible={loading} />
      {spot && (
        <Container size="md" p={0} sx={{ position: "relative" }}>
          <Box sx={{ position: "relative" }}>
            {spot && (
              <SpotBadges
                spot={spot as SpotEntity}
                sx={{ position: "absolute", bottom: 20 }}
              />
            )}
            {!isPreviewMode && (
              <BackButton
                sx={{ position: "absolute", top: 0, left: 0 }}
                m="xl"
                onClick={() => router.back()}
              />
            )}
            <SpotPictureSwiper pictures={spot?.spotPicture} />
          </Box>

          <Stack p="md">
            <Group position="apart">
              <Font variant="h3">{spot?.name}</Font>
              {!isPreviewMode && userIsOwner && (
                <Group>
                  <EditButton spotId={spot.id} />
                  <DeleteButton spotId={spot.id} />
                </Group>
              )}
            </Group>

            <Group spacing={5}>
              <IconMapPinFilled size={14} style={{ color: "#8F8FD9" }} />
              <Font variant="caption" color="bluePurple">
                {spot?.address}
              </Font>
            </Group>

            {!isPreviewMode && profile && (
              <>
                {!userIsOwner ? (
                  <SpotRating id={spot.id} rating={spot?.rating} />
                ) : (
                  <SpotRatingStat rating={spot?.rating} withIcon />
                )}
              </>
            )}

            <DisplayTag value={tags} position="left" list={tagsDataList} />

            <Stack>
              <Font variant="h3">Description</Font>
              <Font>{spot?.description}</Font>
            </Stack>

            {!isPreviewMode && (
              <Flex gap="md">
                {spot?.favorites && !userIsOwner && (
                  <FavoriteButton
                    favorite={{
                      spotId: spot.id,
                      favoriteId: spot?.favorites[0]?.id,
                    }}
                  />
                )}
                <PrimaryButton
                  leftIcon={<IconMap2 />}
                  sx={{ flexGrow: 1 }}
                  onClick={handleGoSpotClick}
                >
                  Voir sur la carte
                </PrimaryButton>
              </Flex>
            )}
          </Stack>
        </Container>
      )}
    </>
  );
};

export default SpotDetail;
