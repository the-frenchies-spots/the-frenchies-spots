/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import {
  QuerySpotByPkArgs,
  SpotByIdResponse,
  queries,
} from "@frenchies-spots/gql";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import SpotDetail from "../../components/SpotDetail/SpotDetail";

const SpotDetailPage = () => {
  const router = useRouter();
  const { spotId } = router.query;

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

  return <SpotDetail spot={data?.spotByPk} loading={loading} />;
};

export default SpotDetailPage;

SpotDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout>{page}</GuardLayout>
    </PageLayout>
  );
};
