import React from "react";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { BY_PRODUCT_MUTATION } from "../../../graphql";
import { useMutation } from "@apollo/client";

// code 4242 4242 4242 4242
// 06/23
// 424

interface CheckoutFormProps {
  amount: number;
  gamePoint: number;
}

export const CheckoutForm = (props: CheckoutFormProps) => {
  const { amount, gamePoint } = props;

  const [buyProduct] = useMutation(BY_PRODUCT_MUTATION);
  const { confirmPayment } = useStripe();

  const handlePayment = async () => {};

  return (
    <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: "4242 4242 4242 4242",
      }}
      cardStyle={{
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
      }}
      style={{
        width: "100%",
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        console.log("cardDetails", cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log("focusField", focusedField);
      }}
    />
  );
};
