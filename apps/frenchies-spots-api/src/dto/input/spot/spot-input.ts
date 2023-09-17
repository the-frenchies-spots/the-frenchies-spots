import { Field, InputType } from '@nestjs/graphql';

import { Column } from 'typeorm';
import { SpotPictureInput } from '../spot-picture/spot-picture-input';
import GraphQLJSON from 'graphql-type-json';
import { CategoriesSpotAndTag } from '../../../enum/categories-spot-and-tag.enum';
import { LocationEntity } from '../../../entity/location.entity';

@InputType()
export class SpotInput {
  @Field({ nullable: true })
  @Column()
  id?: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ default: false })
  isCanPark: boolean;

  @Field()
  @Column({ default: false })
  isHidden: boolean;

  @Field()
  @Column({
    type: 'enum',
    enum: CategoriesSpotAndTag,
    default: CategoriesSpotAndTag.SPARE_TIME_SPOT,
  })
  category: CategoriesSpotAndTag;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json')
  location: LocationEntity;

  @Field()
  @Column()
  region: string;

  @Field()
  @Column()
  address: string;

  @Field(() => [SpotPictureInput], { nullable: true })
  pictures?: SpotPictureInput[];

  @Field(() => [String], { nullable: true })
  tags?: string[] | null;
}
