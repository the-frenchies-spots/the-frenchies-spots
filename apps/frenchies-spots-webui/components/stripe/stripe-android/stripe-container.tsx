import React, { useState, useEffect } from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { CheckoutForm } from "./checkout-form";
import { useLazyQuery } from "@apollo/client";
import { GET_PUBLISHABLE_KEY_QUERY } from "../../../graphql";
import { StripeRequestResult } from "../../../types";

interface StripeContainerProps {
  amount: number;
  gamePoint: number;
}

// code 4242 4242 4242 4242
// 06/23
// 424

export const StripeContainer = (props: StripeContainerProps) => {
  const { amount } = props;
  const [publishableKey, setPublishableKey] = useState("");
  const [getPublishableKey] = useLazyQuery<StripeRequestResult>(
    GET_PUBLISHABLE_KEY_QUERY
  );

  useEffect(() => {
    getPublishableKey({ variables: { amount } }).then((result) => {
      const key = result?.data?.publishableKey || "";
      setPublishableKey(key);
    });
  }, []);

  return (
    <StripeProvider publishableKey={publishableKey}>
      <CheckoutForm {...props} />
    </StripeProvider>
  );
};
