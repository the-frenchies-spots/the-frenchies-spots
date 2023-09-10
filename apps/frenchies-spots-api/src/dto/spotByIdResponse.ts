import { Field, ObjectType } from '@nestjs/graphql';
import { SpotEntity } from 'src/entity/spot.entity';
import { RatingResponse } from './response/rating-response';

@ObjectType()
export class SpotByIdResponse extends SpotEntity {
  @Field(() => RatingResponse, { nullable: true })
  rating?: RatingResponse;
}
