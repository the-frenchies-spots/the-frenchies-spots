import React, { useContext, useEffect, useMemo } from "react";
import { Page, SpotPictureDetail, SpotInfoDetail } from "../../../components";
import { Box, Loader } from "@frenchies-spots/materials";
import { ReadOneSpotRequestResult } from "../../../types";
import { READ_SPOT_BY_ID_QUERY } from "../../../graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import { AuthContext } from "../../../context";
import { useIsFocused } from "@react-navigation/native";

interface SpotDetailPageProps {
  route: { params: { id: string } };
}

export const SpotDetailPage = (props: SpotDetailPageProps) => {
  const { route } = props;
  const { id } = route.params;
  const isFocused = useIsFocused();

  const { currentUser } = useContext(AuthContext);
  const [getSpotById, { data, loading }] =
    useLazyQuery<ReadOneSpotRequestResult>(READ_SPOT_BY_ID_QUERY, {
      variables: { id },
      fetchPolicy: "no-cache",
    });

  useEffect(() => {
    getSpotById();
  }, [isFocused]);

  const isUserOwner: boolean = useMemo(
    () => currentUser?.profileId === data?.spot?.profileId,
    [data, currentUser]
  );

  return (
    <Page opacity={1} isPadding={false} isNavBar={false}>
      {loading ? (
        <Box style={{ padding: 100 }}>
          <Loader />
        </Box>
      ) : (
        <>
          <SpotPictureDetail src={data?.spot?.spotPicture} />
          <SpotInfoDetail
            spotId={id}
            favoriteId={
              (data?.spot?.favorites?.length && data?.spot?.favorites[0]?.id) ||
              ""
            }
            title={data?.spot?.name}
            description={data?.spot?.description}
            location={data?.spot?.address}
            isUserOwner={isUserOwner}
            rate={data?.spot?.ratings[0] && data?.spot?.ratings[0]}
            averageRating={data?.spot?.averageRating}
            maxVote={data?.spot?._count.ratings}
            tags={data?.spot.tags}
          />
        </>
      )}
    </Page>
  );
};
