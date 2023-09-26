import { Spot, CategoriesSpotAndTag } from '@prisma/client';
import { ObjectType, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { RatingEntity } from './rating.entity';
import { ProfileEntity } from './profile.entity';
import { FavoriteEntity } from './favorite.entity';
import { SpotPictureEntity } from './spot-picture.entity';
import { TagOnSpotEntity } from './tag-on-spot.entity';
import { LocationEntity } from './location.entity';

@ObjectType()
@Entity('Spot')
export class SpotEntity implements Spot {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  @Column({ type: 'enum', enum: CategoriesSpotAndTag })
  category: CategoriesSpotAndTag;

  @Field(() => ProfileEntity)
  @ManyToOne(() => ProfileEntity, (profile) => profile.spots)
  profile: ProfileEntity;

  @Field()
  @Column()
  profileId: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json')
  location: LocationEntity;

  @Field()
  @Column()
  region: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column({ default: 0 })
  averageRating: number;

  @Field(() => [SpotPictureEntity], { nullable: true })
  @OneToMany(() => SpotPictureEntity, (spotPicture) => spotPicture.spot, {
    cascade: true,
  })
  spotPicture?: SpotPictureEntity[] | null;

  @Field(() => [RatingEntity], { nullable: true })
  @OneToMany(() => RatingEntity, (rating) => rating.spot, { cascade: true })
  ratings?: RatingEntity[] | null;

  @Field(() => [FavoriteEntity], { nullable: true })
  @OneToMany(() => FavoriteEntity, (favorite) => favorite.spot, {
    cascade: true,
  })
  favorites?: FavoriteEntity[] | null;

  @Field(() => [TagOnSpotEntity], { nullable: true })
  @ManyToMany(() => TagOnSpotEntity, (tagEl) => tagEl.tag.spots)
  tags?: TagOnSpotEntity[] | null;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
