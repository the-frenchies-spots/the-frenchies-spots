import React, { ReactElement, useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";
import { useForm } from "@frenchies-spots/hooks";
import {
  ProfileEntity,
  queries,
  QueryProfilesArgs,
  SpotEntity,
  SpotsInput,
} from "@frenchies-spots/gql";

import SpotsUi from "../../components/SpotsUi/SpotsUi";
import { SpotUiProvider } from "../../components/SpotsUi/SpotUI.provider";
import { PageLayout } from "./../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import { useRouter } from "next/router";
import { getCoordinates } from "../../utils/get-coordinates";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const SpotsPage = () => {
  const [pageLoading, isPageLoading] = useState<boolean>(true);

  const router = useRouter();
  const { lat, lng, spotId } = router.query;

  const [getFilterSpots, { data, loading }] = useLazyQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, { variables: { spotsInput: { searchValue: "" } } });

  const [getPeoples, { data: peoplesData, loading: peoplesLoading }] =
    useLazyQuery<{ profiles: ProfileEntity[] }, QueryProfilesArgs>(
      queries.profiles
    );

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
      getPeoples={getPeoples}
      coordinates={coordinates}
    >
      <LoadingOverlay visible={loading || peoplesLoading} overlayBlur={2} />
      <SpotsUi spotList={data?.spots} peopleList={peoplesData?.profiles} />
    </SpotUiProvider>
  );
};

SpotsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout>
        {(connected) => {
          if (connected) return <NavigationLayout>{page}</NavigationLayout>;
          return <>{page}</>;
        }}
      </GuardLayout>
    </PageLayout>
  );
};

export default SpotsPage;
