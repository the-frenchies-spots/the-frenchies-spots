import Stripe from "stripe";

const secretKey = process?.env?.STRIPE_SECRET_KEY || "";

export const stripe = new Stripe(
  "sk_test_51MRuLiLJCxgBx3YPRiKuwToKXV0TrEMHygP0LBbpRoTPigEZSZcV9KLRwpLotVEIRWSsruMBUEdTNWokj0nGTAWv00iNeqQSSa",
  {
    apiVersion: "2022-11-15",
  }
);
