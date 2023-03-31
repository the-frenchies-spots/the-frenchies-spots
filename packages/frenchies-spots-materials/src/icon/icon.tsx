import { View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { theme, type TColors } from "@frenchies-spots/theme";

const themeColor = theme.TFS.colors;
type SxProps = ViewStyle | TextStyle | ImageStyle;

import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

enum IoniconsEnum {
  "add",
}

enum AntDesignEnum {
  "picture",
}

enum FontAwesome5Enum {
  "coins",
}

enum MaterialCommunityEnum {
  "road-variant",
  "sort-ascending",
  "cards-heart-outline",
  "map-search",
  "map-marker-plus",
  "close-circle-outline",
  "trash-can-outline",
  "heart",
  "bell",
  "trophy-award",
}

enum MaterialIconsEnum {
  "landscape",
  "search",
  "arrow-back-ios",
  "settings",
  "payment",
  "payments",
  "add-circle-outline",
  "edit",
  "star",
  "chat",
  "directions-run",
  "local-parking",
}
enum ExpoIconsEnum {
  "eye",
  "login",
  "account",
  "account-circle",
  "map-marker",
  "picture-in-picture-bottom-right",
  "picture-in-picture-bottom-right-outline",
  "picture-in-picture-top-right",
  "picture-in-picture-top-right-outline",
  "camera",
  "shopping",
  "shopping-music",
  "shopping-outline",
  "shopping-search",
  "road",
}

type MaterialIconsType = keyof typeof MaterialIconsEnum;
type ExpoIconsType = keyof typeof ExpoIconsEnum;
type MaterialCommunityType = keyof typeof MaterialCommunityEnum;
type FontAwesome5EnumType = keyof typeof FontAwesome5Enum;
type AntDesignEnumType = keyof typeof AntDesignEnum;
type IoniconsEnumType = keyof typeof IoniconsEnum;

export type IconProps = {
  name?:
    | MaterialIconsType
    | ExpoIconsType
    | MaterialCommunityType
    | FontAwesome5EnumType
    | AntDesignEnumType
    | IoniconsEnumType;
  size?: number;
  color?: TColors;
  style?: SxProps;
};

export const AppIcon = (props: IconProps) => {
  const { name = "landscape", size = 16, color = "darkPurple", style } = props;

  const isExpoIcons = Object.values(ExpoIconsEnum).includes(name);
  const isMaterialIcons = Object.values(MaterialIconsEnum).includes(name);
  const isFontAwesome5Icons = Object.values(FontAwesome5Enum).includes(name);
  const isAntDesignIcons = Object.values(AntDesignEnum).includes(name);
  const isIoniconsIcons = Object.values(IoniconsEnum).includes(name);
  const isMaterialCommunityIcons = Object.values(
    MaterialCommunityEnum
  ).includes(name);

  return (
    <View>
      {isExpoIcons && (
        <Icon
          name={name as ExpoIconsType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}
      {isMaterialIcons && (
        <MaterialIcons
          name={name as MaterialIconsType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}
      {isMaterialCommunityIcons && (
        <MaterialCommunityIcons
          name={name as MaterialCommunityType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}

      {isFontAwesome5Icons && (
        <FontAwesome5
          name={name as FontAwesome5EnumType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}
      {isAntDesignIcons && (
        <AntDesign
          name={name as AntDesignEnumType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}

      {isIoniconsIcons && (
        <Ionicons
          name={name as IoniconsEnumType}
          size={size}
          color={themeColor[color]}
          style={style}
        />
      )}
    </View>
  );
};
