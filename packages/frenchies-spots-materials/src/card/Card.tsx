import React, { ReactNode } from "react";
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box } from "../box";
import { Icon } from "../icon";
import { Image } from "../image";
import { VStack, HStack } from "../stack";
import { Title, BodyText, Caption } from "../typography";
import { styles } from "./card-styles";
import { CardTag } from "./card-tag";
import { CardInfo } from "./card-info";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface CardProps {
  cardButton?: ReactNode;
  name: string;
  description: string;
  averageRating: number;
  isCanPark: boolean;
  category?: "RESOURCES_SPOT" | "SPARE_TIME_SPOT";
  picture?: string;
  style?: SxProps;
  onPress?: () => void;
}

const Card = (props: CardProps) => {
  const {
    cardButton,
    name,
    description,
    averageRating,
    isCanPark,
    category = "SPARE_TIME_SPOT",
    picture,
    style = {},
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={{ ...styles.container, ...style }}>
        <VStack style={styles.tagContainer} spacing={10}>
          {isCanPark && (
            <Box>
              <CardTag icon="local-parking" />
            </Box>
          )}
          <Box>
            <CardTag
              icon={
                category === "SPARE_TIME_SPOT"
                  ? "directions-run"
                  : "directions-run"
              }
            />
          </Box>
        </VStack>

        <Image style={styles.picture} src={picture} />

        <CardInfo
          cardButton={cardButton}
          name={name}
          averageRating={averageRating}
          description={description}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Card;
