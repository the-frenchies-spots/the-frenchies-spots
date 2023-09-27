import { Field, InputType } from '@nestjs/graphql';

import { Column } from 'typeorm';
import { SpotPictureInput } from '../spot-picture/spot-picture-input';
import GraphQLJSON from 'graphql-type-json';
import { CategoriesSpotAndTag } from '../../../enum/categories-spot-and-tag.enum';
import { LocationEntity } from '../../../entity/location.entity';
import { IsBoolean, IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class SpotInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  @Column()
  id?: string;

  @IsString()
  @Field()
  @Column()
  name: string;

  @IsString()
  @Field()
  @Column()
  description: string;

  @IsBoolean()
  @Field()
  @Column({ default: false })
  isCanPark: boolean;

  @IsBoolean()
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

  @IsString()
  @Field()
  @Column()
  region: string;

  @IsString()
  @Field()
  @Column()
  address: string;

  @Field(() => [SpotPictureInput], { nullable: true })
  pictures?: SpotPictureInput[];

  @IsString({ each: true })
  @ValidateIf(nullable)
  @Field(() => [String], { nullable: true })
  tags?: string[] | null;
}
