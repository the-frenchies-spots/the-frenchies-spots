import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';
import { AvatarProfileEntity } from './avatar-profile.entity';

@ObjectType()
@Entity('Avatar')
export class AvatarEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  pointsRequire: number;

  @Field()
  @Column()
  avatarUrl: string;

  @Field()
  @Column({ default: false })
  isPublic: boolean;

  @Field(() => [ProfileEntity], { nullable: true })
  @ManyToMany(() => ProfileEntity, (profile) => profile.avatars)
  @JoinTable()
  profiles: AvatarProfileEntity[];
}
