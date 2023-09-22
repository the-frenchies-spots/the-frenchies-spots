import React, { ReactElement, useEffect } from "react";

import {
  NotificationEntity,
  QueryNotificationByPkArgs,
  queries,
} from "@frenchies-spots/gql";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { Container } from "@frenchies-spots/material";

import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import ProfileRequestPage from "../../components/Profile/ProfileRequestPage/ProfileRequestPage";

const RequestPage = () => {
  const router = useRouter();
  const { requestId } = router.query;

  const [notifByPk, { data, loading }] = useLazyQuery<
    { notificationByPk: NotificationEntity },
    QueryNotificationByPkArgs
  >(queries.notificationByPk);

  useEffect(() => {
    if (typeof requestId === "string") {
      notifByPk({ variables: { notifId: requestId } });
    }
  }, [requestId, notifByPk]);

  return (
    <Container size="md" h="100%">
      <LoadingOverlay visible={loading} />
      {typeof requestId === "string" &&
        data?.notificationByPk.profileSender && (
          <ProfileRequestPage
            profile={data.notificationByPk.profileSender}
            notifId={requestId}
          />
        )}
    </Container>
  );
};

RequestPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default RequestPage;
