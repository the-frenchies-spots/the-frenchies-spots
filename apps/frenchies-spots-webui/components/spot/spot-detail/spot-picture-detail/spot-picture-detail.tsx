import { Box, Image } from "@frenchies-spots/materials";
import React from "react";
import { BackButton } from "../../../app";
import { styles } from "./spot-picture-detail-styles";
import { SpotPicture } from "../../../../types";

interface SpotPictureDetail {
  src?: SpotPicture[];
  goBackDisabled?: boolean;
}

export const SpotPictureDetail = (props: SpotPictureDetail) => {
  const { src = [], goBackDisabled = false } = props;
  return (
    <Box style={styles.container}>
      <Image src={src[0]?.url || undefined} style={styles.picture} />
      {!goBackDisabled && <BackButton style={styles.backButton} />}
    </Box>
  );
};
