import React, { ReactElement, useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";
import { useForm } from "@frenchies-spots/hooks";
import { LoadingOverlay } from "@frenchies-spots/material";
import { queries, SpotEntity, SpotsInput } from "@frenchies-spots/gql";

import SpotsUi from "../../components/SpotsUi/SpotsUi";
import { SpotUiProvider } from "../../components/SpotsUi/SpotUI.provider";
import { PageLayout } from "./../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import { useRouter } from "next/router";
import { getCoordinates } from "../../utils/get-coordinates";

const SpotsPage = () => {
  const [pageLoading, isPageLoading] = useState<boolean>(true);

  const router = useRouter();
  const { lat, lng, spotId } = router.query;

  const [getFilterSpots, { data, loading }] = useLazyQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, { variables: { spotsInput: { searchValue: "" } } });

  const form = useForm<SpotsInput>({
    initialValues: {
      address: undefined,
      category: undefined,
      isCanPark: undefined,
      isHidden: undefined,
      orderBy: "asc",
      point: undefined,
      searchValue: "",
      skip: 0,
      tagListId: [],
      take: 100,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      isPageLoading(false);
    }, 500);
  }, []);

  const coordinates = getCoordinates(lat as string, lng as string);

  if (pageLoading)
    return <LoadingOverlay visible={pageLoading} overlayBlur={2} />;
  return (
    <SpotUiProvider
      spotId={typeof spotId === "string" ? spotId : null}
      form={form}
      getFilterSpots={getFilterSpots}
      coordinates={coordinates}
    >
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <SpotsUi list={data?.spots} />
    </SpotUiProvider>
  );
};

SpotsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};

export default SpotsPage;
