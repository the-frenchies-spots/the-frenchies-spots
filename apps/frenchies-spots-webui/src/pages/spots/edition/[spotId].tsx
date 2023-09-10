/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useMemo } from "react";

import { useRouter } from "next/router";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Container, LoadingOverlay, Log } from "@frenchies-spots/material";
import {
  CategoriesSpotAndTag,
  MutationUpdateSpotArgs,
  QuerySpotByPkArgs,
  SpotEntity,
  SpotInput,
  mutations,
  queries,
} from "@frenchies-spots/gql";

import { PageLayout, SpotEditionForm } from "../../../components";

const SpotUpdatePage = () => {
  const router = useRouter();
  const { spotId } = router.query;

  const [getSpotByPk, { data, loading }] = useLazyQuery<
    { spotByPk: SpotEntity },
    QuerySpotByPkArgs
  >(queries.spotByPk);

  useEffect(() => {
    if (spotId !== undefined) {
      getSpotByPk({
        variables: { id: `${spotId}` },
      });
    }
  }, [spotId]);

  const [updateSpot, { data: updatedata, loading: updateLoading }] =
    useMutation<{ updateSpot: SpotEntity }, MutationUpdateSpotArgs>(
      mutations.updateSpot
    );

  const initialValues: SpotInput | undefined = useMemo(
    () =>
      data && typeof spotId === "string"
        ? {
            id: spotId,
            name: data?.spotByPk?.name || "",
            description: data?.spotByPk?.description || "",
            address: data?.spotByPk?.address || "",
            category:
              data?.spotByPk?.category || CategoriesSpotAndTag.SPARE_TIME_SPOT,
            isCanPark: data?.spotByPk?.isCanPark || true,
            isHidden: data?.spotByPk?.isHidden || false,
            region: data?.spotByPk?.region || "",
            pictures:
              data?.spotByPk?.spotPicture?.map(({ url, hostId }) => ({
                url,
                hostId,
              })) || [],
            tags: data?.spotByPk?.tags?.map((tagData) => tagData.tag.id) || [],
            location: data?.spotByPk?.location || {
              type: "Point",
              coordinates: [0, 0],
            },
          }
        : undefined,
    [data, spotId]
  );

  const handleSubmit = (updateSpotInput: SpotInput) => {
    updateSpot({ variables: { updateSpotInput } }).then((result) => {
      router.push("/spots");
    });
  };

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Container size="md" p="md" sx={{ border: "1px solid" }}>
        {initialValues && (
          <SpotEditionForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        )}
      </Container>
    </>
  );
};

export default SpotUpdatePage;

SpotUpdatePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
