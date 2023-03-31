import { uniqueId } from "lodash";
import React, { useState, useEffect } from "react";
import { Image as NativeImage } from "react-native";

const empty =
  "https://res.cloudinary.com/db00tntyg/image/upload/v1674672661/travelerSpot/assets/bougokp6hksllzrpxbsw.png";

type ImageProps = {
  style?: Record<string, string | number>;
  src?: string;
};

export const Image = (props: ImageProps) => {
  const { style, src = empty } = props;
  const [uri, setUri] = useState(src);

  useEffect(() => {
    const isBase64 = src.charAt(0) === "d";
    setUri(isBase64 ? src : `${src}?${uniqueId()}`);
  }, [src]);

  return (
    <NativeImage style={style} source={{ uri }} onError={() => setUri(empty)} />
  );
};
