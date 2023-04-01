import React, { ReactNode } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { Box } from "../box";
import { Icon } from "../icon";
import { Image } from "../image";
import { VStack, HStack } from "../stack";
import { Title, BodyText, Caption } from "../typography";
import { styles } from "./card-styles";
import { CardTag } from "./card-tag";

interface CardProps {
  cardButton?: ReactNode;
  name: string;
  description: string;
  averageRating: number;
  isCanPark: boolean;
  category?: "RESOURCES_SPOT" | "SPARE_TIME_SPOT";
  picture?: string;
}

export const Card = (props: CardProps) => {
  const {
    cardButton,
    name,
    description,
    averageRating,
    isCanPark,
    category = "SPARE_TIME_SPOT",
    picture,
  } = props;

  return (
    <Box style={styles.container}>
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

      <Box>
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
          <BodyText>{description}</BodyText>
        </VStack>
      </Box>
    </Box>
  );
};
