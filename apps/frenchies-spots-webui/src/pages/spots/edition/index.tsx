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

  const [insertSpot, { data, loading, error }] = useMutation<
    { insertSpot: SpotEntity },
    MutationInsertSpotArgs
  >(mutations.insertSpot);

  const handleSubmit = (insertSpotInput: SpotInput) => {
    toast.promise(
      insertSpot({ variables: { insertSpotInput } }).then(() => {
        router.push("/spots");
      }),
      {
        loading: "Création...",
        success: <b>Spot crée avec succès.</b>,
        error: <b>La Création à échoué.</b>,
      }
    );
  };

  return (
    <Container size="md" p="md" sx={{ border: "1px solid" }}>
      <SpotEditionForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Container>
  );
};

export default SpotInsertPage;

SpotInsertPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
