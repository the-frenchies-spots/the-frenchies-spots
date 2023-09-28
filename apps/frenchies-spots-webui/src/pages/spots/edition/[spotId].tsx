/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useMemo } from "react";

import { useRouter } from "next/router";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Container } from "@frenchies-spots/material";
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
import toast from "react-hot-toast";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";

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

  const [updateSpot] = useMutation<
    { updateSpot: SpotEntity },
    MutationUpdateSpotArgs
  >(mutations.updateSpot);

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
    toast.promise(
      updateSpot({ variables: { updateSpotInput } }).then((result) => {
        const lat = result?.data?.updateSpot?.location?.coordinates[1];
        const lng = result?.data?.updateSpot?.location?.coordinates[0];
        const id = result?.data?.updateSpot?.id;
        router.push(`/spots?lat=${lat}&lng=${lng}&spotId=${id}`);
      }),
      {
        loading: "Mise à jour en cours...",
        success: <b>Spot mis à jour avec succès.</b>,
        error: <b>La mise à jour a échoué.</b>,
      }
    );
  };

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />

      {initialValues && (
        <SpotEditionForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default SpotUpdatePage;

SpotUpdatePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>{page}</GuardLayout>
    </PageLayout>
  );
};
