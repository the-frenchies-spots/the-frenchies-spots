import { PaymentResult } from '../../types';
import { stripe } from './stripe';

const stripeRepository = {
  /**
   * Stripe payment
   */
  payment: async (token: string, amount: number): PaymentResult => {
    return stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'EUR',
      confirm: true,
      payment_method: token
    });
  },

  /**
   * Create a payment request
   */
  createPaymentRequest: async (amount: number): PaymentResult => {
    return stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'EUR'
    });
  }
};

export default stripeRepository;
