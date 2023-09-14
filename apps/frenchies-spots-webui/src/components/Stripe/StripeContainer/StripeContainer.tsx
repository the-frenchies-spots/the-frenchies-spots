import React, { ReactNode } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const public_key = process.env.NEXT_PUBLIC_STRIPE_KEY || "";

const stripePromise = loadStripe(public_key);

interface StripeContainerProps {
  onCheckout: (paymentId: string) => void;
  loading?: boolean;
  children?: ReactNode;
}

const StripeContainer = ({
  onCheckout,
  loading = false,
  children,
}: StripeContainerProps) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onCheckout={onCheckout} loading={loading}>
        {children}
      </CheckoutForm>
    </Elements>
  );
};

export default StripeContainer;
