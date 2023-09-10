import React from "react";

import { Image, BackgroundImage } from "@frenchies-spots/material";

import type { BackgroundImageProps } from "@frenchies-spots/material";

const noImage =
  "https://res.cloudinary.com/dw2hb8vmu/image/upload/v1693846473/default_ac2sl7.webp";

interface SpotPictureProps extends Omit<BackgroundImageProps, "src"> {
  src?: string | undefined;
}

const SpotPicture = (props: SpotPictureProps) => {
  const { src, ...imageProps } = props;

  return <BackgroundImage src={src ? src : noImage} {...imageProps} />;
};

export default SpotPicture;
