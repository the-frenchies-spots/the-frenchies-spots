import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@InputType()
export class BuyPointInput {
  @IsNumber()
  @Field()
  amount: number;

  @IsString()
  @Field()
  paymentId: string;
}
