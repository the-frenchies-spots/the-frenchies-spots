import GraphQLJSON from 'graphql-type-json';
import { Field, InputType } from '@nestjs/graphql';

import { GeoPointInput } from '../geo-point/geo-point-input';

@InputType()
export class ProfilesInput {
  @Field(() => GraphQLJSON, { nullable: true })
  point: GeoPointInput;
}
