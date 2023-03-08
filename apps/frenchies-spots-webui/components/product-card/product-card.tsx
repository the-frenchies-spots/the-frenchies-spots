import { Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./product-card-styles";
import { Product } from "../../types";
import { Container, Box, Typography } from "../../materials";
import { useTheme } from "../../hooks";
import Icon from "../../materials/icon/icon";

interface ProductCardProps extends Product {
  style?: Record<string, string | number>;
  onProductClick: (product: Product) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const {
    id,
    photoUrl,
    gamePoints,
    price,
    style: extStyle = {},
    onProductClick,
  } = props;

  const style = useTheme(styles);
  return (
    <Pressable
      onPress={() => onProductClick({ id, photoUrl, gamePoints, price })}
    >
      <Container style={{ ...style.container, ...extStyle }} direction="row">
        <Box style={style.imageContainer}>
          <Image style={style.image} source={{ uri: photoUrl }} />
        </Box>
        <Container direction="row" style={style.secondContainer}>
          <Box style={style.gamePointsCard}>
            <Typography color="white" style={style.gamePointsLabel}>
              + {gamePoints} <Icon name="coins" color="white" />
            </Typography>
          </Box>
          <Box style={style.priceCard}>
            <Typography color="white" style={style.priceCardLabel}>
              {price} €
            </Typography>
          </Box>
        </Container>
      </Container>
    </Pressable>
  );
};
