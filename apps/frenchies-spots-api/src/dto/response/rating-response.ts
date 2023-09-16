import { Field, ObjectType } from '@nestjs/graphql';
import { RatingEntity } from '../../entity/rating.entity';

@ObjectType()
export class RatingResponse {
  @Field({ nullable: true })
  currentRating?: RatingEntity;

  @Field()
  avg: number;

  @Field()
  maxVote: number;
}
