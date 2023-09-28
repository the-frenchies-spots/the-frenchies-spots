import React, { ReactElement } from "react";
import { PageLayout, SpotEditionForm } from "../../../components";
import { Container } from "@frenchies-spots/material";
import {
  CategoriesSpotAndTag,
  MutationInsertSpotArgs,
  SpotEntity,
  SpotInput,
  mutations,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";

const initialValues: SpotInput = {
  name: "",
  description: "",
  address: "",
  category: CategoriesSpotAndTag.SPARE_TIME_SPOT,
  isCanPark: true,
  isHidden: false,
  region: "",
  pictures: [],
  tags: [],
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
};

const SpotInsertPage = () => {
  const router = useRouter();

  const [insertSpot, { loading }] = useMutation<
    { insertSpot: SpotEntity },
    MutationInsertSpotArgs
  >(mutations.insertSpot);

  const handleSubmit = (insertSpotInput: SpotInput) => {
    toast.promise(
      insertSpot({ variables: { insertSpotInput } }).then((result) => {
        const lat = result?.data?.insertSpot?.location?.coordinates[1];
        const lng = result?.data?.insertSpot?.location?.coordinates[0];
        const id = result?.data?.insertSpot?.id;
        router.push(`/spots?lat=${lat}&lng=${lng}&spotId=${id}`);
      }),
      {
        loading: "Création en cours...",
        success: <b>Spot crée avec succès.</b>,
        error: <b>La création a échoué.</b>,
      }
    );
  };

  return (
    <SpotEditionForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default SpotInsertPage;

SpotInsertPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>{page}</GuardLayout>
    </PageLayout>
  );
};
