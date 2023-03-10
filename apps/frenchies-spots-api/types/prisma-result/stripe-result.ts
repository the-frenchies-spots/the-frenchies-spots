import Stripe from 'stripe';

export type PaymentResult = Promise<Stripe.Response<Stripe.PaymentIntent>>;
