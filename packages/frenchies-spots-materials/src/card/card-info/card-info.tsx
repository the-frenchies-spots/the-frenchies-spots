import React, { ReactNode } from "react";
import { Box } from "../../box";
import { HStack, VStack } from "../../stack";
import { BodyText, Caption, Title } from "../../typography";
import { Icon } from "../../icon";
import { styles } from "./card-info-styles";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
type SxProps = ViewStyle | TextStyle | ImageStyle;

interface CardInfoProps {
  cardButton?: ReactNode;
  name: string;
  description: string;
  averageRating: number;
  style?: SxProps;
}

export const CardInfo = (props: CardInfoProps) => {
  const { style = {}, cardButton, name, averageRating, description } = props;

  return (
    <Box style={style}>
      {cardButton && <Box style={styles.cardButton}>{cardButton}</Box>}
      <VStack spacing={5} style={styles.cardContent}>
        <Box>
          <Title variant="h3">{name}</Title>
        </Box>

        <HStack spacing={20}>
          <HStack items="center" spacing={5}>
            <Icon name="star" color="darkGrey" />
            <Caption>{averageRating}</Caption>
          </HStack>
          <HStack items="center" spacing={5}>
            <Icon name="chat" color="darkGrey" />
            <Caption>200</Caption>
          </HStack>
        </HStack>
        <BodyText>
          {description.length > 70
            ? description.substring(0, 70) + "..."
            : description}
        </BodyText>
      </VStack>
    </Box>
  );
};
