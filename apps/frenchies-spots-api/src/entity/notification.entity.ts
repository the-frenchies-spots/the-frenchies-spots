import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@Entity('Notification')
export class NotificationEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ProfileEntity)
  @Column()
  profile: ProfileEntity;

  @Field()
  @Column()
  profileId: string;

  @Field()
  @Column()
  isRead: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json')
  content: Record<string, unknown>;

  @Field()
  @Column()
  type: string;
}
