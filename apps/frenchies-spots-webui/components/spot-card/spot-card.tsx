import React from "react";
import { Box, Image } from "../../materials";
import { styles } from "./spot-card-styles";
import { PreviewCard } from "./preview-card/preview-card";
import { useMediaQuery, useNavigation } from "../../hooks";
import { SpotCardMode } from "./spot-card-type";
import { SpotType } from "../../types";

export interface SpotCardProps extends SpotType {
  mode?: SpotCardMode;
  style?: Record<string, string | number>;
}

export const SpotCard = (props: SpotCardProps) => {
  const {
    id,
    name = "test",
    description = "lorem ipsum",
    spotPicture,
    mode = "medium",
    style: extStyle = {},
  } = props;

  const { navigateTo } = useNavigation();
  const { isPhone, isTablette } = useMediaQuery();

  const style = styles(mode, isPhone, isTablette);

  const handleGoClick = () => {
    navigateTo("spot", { id });
  };

  return (
    <Box style={{ ...style.container, ...extStyle }}>
      <Image style={style.image} src={spotPicture[0].url} />
      <PreviewCard
        title={name}
        description={description}
        onClick={handleGoClick}
      />
    </Box>
  );
};
