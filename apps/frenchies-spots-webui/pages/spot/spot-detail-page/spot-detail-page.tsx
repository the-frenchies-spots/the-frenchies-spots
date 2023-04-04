import React, { useContext, useMemo } from "react";
import { Page, SpotPictureDetail, SpotInfoDetail } from "../../../components";
import { Box, Title, Image } from "@frenchies-spots/materials";
import { styles } from "./spot-detail-page-styles";
import { ReadOneSpotRequestResult } from "../../../types";
import { READ_SPOT_BY_ID_QUERY } from "../../../graphql";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../../../context";

interface SpotDetailPageProps {
  route?: { params: { id: string } };
}

export const SpotDetailPage = (props: SpotDetailPageProps) => {
  const { route } = props;
  const id = route?.params?.id;

  const { currentUser } = useContext(AuthContext);
  const { data, loading } = useQuery<ReadOneSpotRequestResult>(
    READ_SPOT_BY_ID_QUERY,
    { variables: { id } }
  );

  const isUserOwner: boolean = useMemo(
    () => currentUser?.profileId === data?.spot?.profileId,
    [data, currentUser]
  );

  console.log(data);

  return (
    <Page opacity={1} isPadding={false}>
      <SpotPictureDetail src={data?.spot?.spotPicture} />
      <SpotInfoDetail
        spotId={id}
        title={data?.spot?.name}
        description={data?.spot?.description}
        location="Blanquefort, France"
        isUserOwner={isUserOwner}
      />
    </Page>
  );
};
