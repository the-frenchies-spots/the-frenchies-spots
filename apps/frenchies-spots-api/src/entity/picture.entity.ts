import { ObjectType, Field } from '@nestjs/graphql';

import { Entity } from 'typeorm';

@ObjectType()
@Entity('Picture')
export class PictureEntity {
  @Field()
  public_id: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  url: string;

  @Field()
  secure_url: string;
}
