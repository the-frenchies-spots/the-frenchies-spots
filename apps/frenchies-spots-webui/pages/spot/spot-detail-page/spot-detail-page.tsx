import React from "react";
import { Page, SpotPictureDetail, SpotInfoDetail } from "../../../components";
import { Box, Title, Image } from "@frenchies-spots/materials";
import { styles } from "./spot-detail-page-styles";

interface SpotDetailPageProps {
  route?: { params: { id: string } };
}

export const SpotDetailPage = (props: SpotDetailPageProps) => {
  const { route } = props;
  const id = route?.params?.id;

  return (
    <Page opacity={1} isPadding={false}>
      <SpotPictureDetail src="https://previews.123rf.com/images/marisha5/marisha51601/marisha5160100276/50703619-paysage-magnifique-for%C3%AAt-le-matin.jpg" />
      <SpotInfoDetail
        spotId={"df5t7g48rh8dytsy"}
        title="Mont Sarruma"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna"
        location="Blanquefort, France"
        isUserOwner={true}
      />
    </Page>
  );
};
