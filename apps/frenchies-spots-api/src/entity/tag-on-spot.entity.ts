import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { TagEntity } from './tag.entity';

@ObjectType()
@Entity('TagOnSpot')
export class TagOnSpotEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  tagId: string;

  @Field()
  @Column()
  spotId: string;

  @Field()
  @Column()
  tag: TagEntity;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
