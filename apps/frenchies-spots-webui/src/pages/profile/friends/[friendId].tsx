import React, { ReactElement, useEffect } from "react";

import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { BackButton, Container, Log } from "@frenchies-spots/material";

import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";
import {
  ProfileEntity,
  QueryFriendByPkArgs,
  queries,
} from "@frenchies-spots/gql";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";
import FriendPage from "../../../components/Profile/FriendPage/FriendPage";

const FriendDetailPage = () => {
  const router = useRouter();

  const { friendId } = router.query;
  const [friendByPk, { data, loading }] = useLazyQuery<
    { friendByPk: ProfileEntity },
    QueryFriendByPkArgs
  >(queries.friendByPk);

  useEffect(() => {
    if (typeof friendId === "string") {
      friendByPk({ variables: { friendId } });
    }
  }, [friendId, friendByPk]);

  return (
    <Container size="md" h="100%" py="xl" sx={{ position: "relative" }}>
      <BackButton
        sx={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => router.back()}
        m="md"
      />
      <LoadingOverlay visible={loading} />
      {data?.friendByPk && <FriendPage profile={data.friendByPk} />}
    </Container>
  );
};

FriendDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default FriendDetailPage;
