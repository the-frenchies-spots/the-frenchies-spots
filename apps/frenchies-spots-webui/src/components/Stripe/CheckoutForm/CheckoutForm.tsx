import React, { ReactNode } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElementComponent,
} from "@stripe/react-stripe-js";

import {
  Box,
  Button,
  Flex,
  Font,
  Stack,
  DEFAULT_THEME as theme,
} from "@frenchies-spots/material";

const inputStyle = {
  backgroundColor: "#E3E3FA",
  overflow: "hidden",
  padding: "10px",
  borderRadius: "5px",
};

const CardElementCustom: CardElementComponent = () => {
  const cardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#E3E3FA",
        boxShadow: "0px 4px 8px 0px #DBDBDB",
        padding: "10px",
        borderRadius: "5px",
      },
    },
  };

  return (
    <Stack>
      <Font>Numéro de carte</Font>
      <Box sx={inputStyle}>
        <CardNumberElement options={cardElementOptions} />
      </Box>

      <Flex gap="md">
        <Box sx={{ flexGrow: 1 }}>
          <Font>{`Valable jusqu'au`}</Font>
          <Box sx={inputStyle}>
            <CardExpiryElement options={cardElementOptions} />
          </Box>
        </Box>
        <Box w={100}>
          <Font>CVC</Font>
          <Box sx={inputStyle}>
            <CardCvcElement options={cardElementOptions} />
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};

interface CheckoutFormProps {
  onCheckout: (paymentId: string) => void;
  loading: boolean;
  children?: ReactNode;
}

const CheckoutForm = ({ onCheckout, loading, children }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await handleStripeCharge();
  };

  const handleStripeCharge = async () => {
    if (stripe && elements) {
      const cardNumberElement = elements?.getElement("cardNumber");
      const cardExpiryElement = elements?.getElement("cardExpiry");
      const cardCvcElement = elements?.getElement("cardCvc");

      if (cardNumberElement && cardExpiryElement && cardCvcElement) {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardNumberElement,
        });
        if (!error) {
          console.log("Token Généré", paymentMethod);
          const { id } = paymentMethod;
          onCheckout(id);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <CardElementCustom />
        {children ? (
          <>{children}</>
        ) : (
          <Button loading={loading} type="submit">
            Payer
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default CheckoutForm;
