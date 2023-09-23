import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { LocationEntity } from '../../../entity/location.entity';

@InputType()
export class ProfileInput {
  @Field({ nullable: true })
  pseudo?: string;

  @Field({ nullable: true })
  slogan?: string;

  @Field({ nullable: true })
  gamePoint?: number;

  @Field({ nullable: true })
  isLocated?: boolean;

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field({ nullable: true })
  photoUrl?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  location?: LocationEntity;
}
