/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";

import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";
import { SpotEntity, SpotsInput, queries } from "@frenchies-spots/gql";
import { useLazyQuery } from "@apollo/client";
import { useAuth } from "../../../hooks/use-auth";
import SpotList from "../../../components/Spots/SpotList/SpotList";
import { Container, Group } from "@frenchies-spots/material";
import EditButton from "./../../../components/Spots/SpotButton/EditButton/EditButton";
import DeleteButton from "./../../../components/Spots/SpotButton/DeleteButton/DeleteButton";
import StatusBar from "../../../components/StatusBar/StatusBar";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";

const ProfileSpots = () => {
  const { profile } = useAuth();
  const [getProfileSpots, { data, loading }] = useLazyQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots);

  useEffect(() => {
    if (profile) {
      getProfileSpots({
        variables: { spotsInput: { searchValue: "", profileId: profile?.id } },
      });
    }
  }, [profile]);

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Container size="md" mt="md">
        <StatusBar />
      </Container>
      <SpotList list={data?.spots} pt="md">
        {({ spotId }) => (
          <Group>
            <EditButton spotId={spotId} />
            <DeleteButton spotId={spotId} />
          </Group>
        )}
      </SpotList>
    </>
  );
};

export default ProfileSpots;

ProfileSpots.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};
