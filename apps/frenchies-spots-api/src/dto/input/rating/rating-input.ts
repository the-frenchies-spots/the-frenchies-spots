import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class RatingInput {
  @IsNumber()
  @Field()
  rate: number;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  ratingId?: string | undefined;

  @IsString()
  @Field()
  spotId: string;
}
