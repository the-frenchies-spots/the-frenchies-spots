import { ObjectType, Field } from '@nestjs/graphql';
import { ProfileEntity } from './profile.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Contact')
export class ContactEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ProfileEntity)
  profile: ProfileEntity;

  @Field()
  profileId: string;

  @Field()
  authorization: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
