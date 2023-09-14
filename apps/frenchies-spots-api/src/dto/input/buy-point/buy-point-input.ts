import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BuyPointInput {
  @Field()
  amount: number;

  @Field()
  paymentId: string;
}
