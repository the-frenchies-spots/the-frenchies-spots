import React, { ReactNode } from "react";
import { Image, Text, Platform } from "react-native";
import { StripeContainer as StripeWebContainer } from "./stripe-web/stripe-container";
import { StripeContainer as StripeAndroidContainer } from "./stripe-android/stripe-container";
import { Typography, Container, Box } from "../../materials";
import { Icon } from "../../materials/icon";
import { useTheme } from "../../hooks";
import { styles } from "./stripe-styles";
import { Divider } from "@react-native-material/core";
import { DropDownContents } from "../drop-down-contents/drop-down-contents";

type StripeProps = {
  gamePoint: number;
  articlePrice: number;
  articlePicture?: string;
  onClose: () => void;
};

interface StripePaymentProps extends StripeProps {
  children: ReactNode;
}

const StripePayment = (props: StripePaymentProps) => {
  const { children, articlePrice, articlePicture = "", onClose } = props;

  const style = useTheme(styles);

  return (
    <DropDownContents
      title={
        <>
          <Icon name="payments" size={20} /> Paiement
        </>
      }
      onClose={onClose}
    >
      <Container
        direction="row"
        style={style.article}
        align="center"
        justify="space-around"
      >
        <Image source={{ uri: articlePicture }} style={style.image} />
        <Typography style={style.price}>{articlePrice} €</Typography>
      </Container>
      <Divider />

      {children}
    </DropDownContents>
  );
};

export const Stripe = (props: StripeProps) => {
  const { gamePoint, articlePrice, onClose } = props;
  switch (Platform.OS) {
    case "web":
      return (
        <StripePayment {...props}>
          <StripeWebContainer
            amount={articlePrice}
            gamePoint={gamePoint}
            onClose={onClose}
          />
        </StripePayment>
      );
    default:
      return (
        <StripePayment {...props}>
          <Text>Pas encore disponible pour Android</Text>
          {/* <StripeAndroidContainer amount={articlePrice} gamePoint={gamePoint} /> */}
        </StripePayment>
      );
  }
};
