import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
@InputType()
export class GeoPointInput {
  @IsNumber()
  @Field(() => [Float], { nullable: true })
  coordinates: [number, number];

  @IsNumber()
  @Field({ nullable: true })
  maxDistance: number;
}
