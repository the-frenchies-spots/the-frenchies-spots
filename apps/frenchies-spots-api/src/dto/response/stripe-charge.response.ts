import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StripeChargeResponse {
  message: string;
  success: boolean;
}
