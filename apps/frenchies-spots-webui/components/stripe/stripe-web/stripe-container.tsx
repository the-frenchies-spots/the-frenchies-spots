import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./checkout-form";
import { STRIPE_PUBLIC_KEY } from "../../../config/env";

const stripe = loadStripe(STRIPE_PUBLIC_KEY);

interface StripeContainerProps {
  amount: number;
  gamePoint: number;
  onClose: () => void;
}

// code 4242 4242 4242 4242
// 06/23
// 424

export const StripeContainer = (props: StripeContainerProps) => {
  return (
    <Elements stripe={stripe}>
      <CheckoutForm {...props} />
    </Elements>
  );
};
