import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@Entity('Notification')
export class NotificationEntity {
  @Field()
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' }) // Assuming 'uuid' is the correct column type
  @ManyToOne(() => ProfileEntity, (profile) => profile.notifications)
  profile: ProfileEntity;

  @Field()
  @Column()
  profileId: string;

  @Field(() => ProfileEntity)
  @Column({ type: 'uuid' })
  @ManyToOne(() => ProfileEntity, (profile) => profile.profileSender)
  profileSender: ProfileEntity;

  @Field()
  @Column()
  profileSenderId: string;

  @Field()
  @Column()
  isRead: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json')
  content?: Record<string, unknown>;

  @Field()
  @Column()
  type: string;
}
