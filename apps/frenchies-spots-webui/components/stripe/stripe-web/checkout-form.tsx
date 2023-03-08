import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { BY_PRODUCT_MUTATION, AUTH_BY_TOKEN_QUERY } from "../../../graphql";
import { useMutation } from "@apollo/client";
import { IconButton } from "../../../materials/icon-button/icon-button";
import Toast from "react-native-root-toast";
import { useNavigation } from "../../../hooks";
import { AuthContext } from "../../../context";

// code 4242 4242 4242 4242
// 06/23
// 424

interface CheckoutFormProps {
  amount: number;
  gamePoint: number;
  onClose: () => void;
}

export const CheckoutForm = (props: CheckoutFormProps) => {
  const { amount, gamePoint, onClose } = props;

  const [buyProduct, { loading }] = useMutation(BY_PRODUCT_MUTATION);
  const { currentUser } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();
  const { navigateTo } = useNavigation();

  const handleSubmit = async () => {
    if (stripe) {
      const type = "card";
      const card = elements?.getElement(CardElement) as StripeCardElement;

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type,
        card,
      });
      if (typeof paymentMethod !== "undefined") {
        const { id: token } = paymentMethod;
        if (!error) {
          buyProduct({
            variables: { gamePoint, token, amount },
            refetchQueries: [{ query: AUTH_BY_TOKEN_QUERY }],
          })
            .then((result: any) => {
              Toast.show(`Vous gagner ${gamePoint} points !`, {
                position: Toast.positions.TOP,
                duration: Toast.durations.LONG,
              });
              onClose();
              if (currentUser) {
                currentUser.gamePoint += gamePoint;
              }

              navigateTo("account");
            })
            .catch((error) => console.log(error));
        }
      }
    }
  };

  return (
    <form style={{ marginTop: 20 }}>
      <CardElement options={{ hidePostalCode: true }} />
      <IconButton
        style={{ marginTop: 20 }}
        name="payment"
        label="Payer"
        onPress={handleSubmit}
        isLoading={loading}
      />
    </form>
  );
};
