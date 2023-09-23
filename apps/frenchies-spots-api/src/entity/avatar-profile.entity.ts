import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AvatarEntity } from './avatar.entity';
import { ProfileEntity } from './profile.entity'; // Assurez-vous d'importer l'entité Profile appropriée

@ObjectType()
@Entity('AvatarProfile')
export class AvatarProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  @Column()
  id: string;

  @Field(() => AvatarEntity)
  @ManyToOne(() => AvatarEntity, (avatar) => avatar.profiles)
  avatar: AvatarEntity;

  @Field()
  avatarId: string;

  @Field(() => ProfileEntity)
  @ManyToOne(() => ProfileEntity, (profile) => profile.avatars)
  profile: ProfileEntity;

  @Field()
  profileId: string;
}
