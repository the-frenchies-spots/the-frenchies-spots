import React from "react";
import { Image, ImageProps } from "react-native";
import { styles } from "./avatar-styles";
import { StyleProp, ImageStyle } from "react-native";

interface AvatarProps extends Pick<ImageProps, "style"> {
  url?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    url = "https://res.cloudinary.com/db00tntyg/image/upload/v1679666338/travelerSpot/lnsmies96qtye1k7dt66.png",
    style = {},
  } = props;
  return (
    <Image
      source={{ uri: url }}
      style={[
        style,
        {
          ...styles.avatar,
        },
      ]}
    />
  );
};
