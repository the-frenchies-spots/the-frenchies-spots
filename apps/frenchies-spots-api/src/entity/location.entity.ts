import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LocationEntity {
  @Field()
  type: 'Point';

  @Field(() => [Float])
  coordinates: [number, number];
}
