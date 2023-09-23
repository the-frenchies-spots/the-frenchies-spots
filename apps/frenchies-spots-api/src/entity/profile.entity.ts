import { Profile } from '@prisma/client';
import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { UserEntity } from './user.entity';
import { SpotEntity } from './spot.entity';
import { RatingEntity } from './rating.entity';
import { FavoriteEntity } from './favorite.entity';
import { ContactEntity } from './contact.entity';
import { ProfileChatEntity } from './profile-chat.entity';
import GraphQLJSON from 'graphql-type-json';
import { LocationEntity } from './location.entity';
import { NotificationEntity } from './notification.entity';
import { AvatarEntity } from './avatar.entity';
import { AvatarProfileEntity } from './avatar-profile.entity';

@ObjectType()
@Entity('Profile')
export class ProfileEntity implements Profile {
  @Field()
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  pseudo: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  slogan: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  photoUrl: string;

  @Field()
  @Column({ default: false })
  isLocated: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatarUrl: string;

  @Field()
  @Column({ default: 0 })
  gamePoint: number;

  @Field()
  @Column()
  userId: string;

  @Field(() => UserEntity)
  @Column({ type: 'uuid' })
  @ManyToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;

  @Field(() => [SpotEntity], { nullable: true })
  @Column()
  @OneToMany(() => SpotEntity, (spot) => spot.profile, { cascade: true })
  spots: SpotEntity[];

  @Field(() => [NotificationEntity], { nullable: true })
  @Column()
  @OneToMany(() => NotificationEntity, (notification) => notification.profile, {
    cascade: true,
  })
  notifications: NotificationEntity[];

  @Field(() => [NotificationEntity], { nullable: true })
  @Column()
  @OneToMany(
    () => NotificationEntity,
    (notification) => notification.profileSender,
    {
      cascade: true,
    },
  )
  profileSender: NotificationEntity[];

  @Field(() => [RatingEntity], { nullable: true })
  @Column()
  @OneToMany(() => RatingEntity, (rating) => rating.profile, { cascade: true })
  ratings: RatingEntity[];

  @Field(() => [FavoriteEntity], { nullable: true })
  @Column()
  @OneToMany(() => FavoriteEntity, (favorite) => favorite.profile, {
    cascade: true,
  })
  favorites: FavoriteEntity[];

  @Field(() => [AvatarProfileEntity], { nullable: true })
  @Column()
  @ManyToMany(
    () => AvatarProfileEntity,
    (avatarProfile) => avatarProfile.avatar.profiles,
  )
  avatars: AvatarEntity[];

  @Field(() => [ContactEntity], { nullable: true })
  @Column()
  @OneToMany(() => ContactEntity, (contact) => contact.profile, {
    cascade: true,
  })
  contacts: ContactEntity[];

  @Field(() => [ProfileChatEntity], { nullable: true })
  @Column()
  @OneToMany(() => ProfileChatEntity, (profileChat) => profileChat.profile, {
    cascade: true,
  })
  profileChats?: ProfileChatEntity[];

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json')
  location: LocationEntity;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
