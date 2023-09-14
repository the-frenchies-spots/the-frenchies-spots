import Stripe from 'stripe';
import { Injectable } from '@nestjs/common';
import { StripeChargeResponse } from 'src/dto/response/stripe-charge.response';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

const handleError = (err: any): StripeChargeResponse => {
  console.log(err);
  return { message: 'Payment not succeed', success: false };
};

@Injectable()
export class StripeService {
  async charge(amount: number, id: string): Promise<StripeChargeResponse> {
    try {
      stripe.paymentIntents
        .create({
          amount,
          currency: 'EUR',
          description: 'Frenchies Spots Shoping',
          payment_method: id,
        })
        .then(() => ({ message: 'Payment succeed', success: true }))
        .catch((err) => handleError(err));

      return { message: 'Payment succeed', success: true };
    } catch (err) {
      handleError(err);
    }
  }
}
