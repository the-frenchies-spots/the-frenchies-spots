import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { LocationEntity } from '../../../entity/location.entity';
import { IsBoolean, IsNumber, IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class ProfileInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  pseudo?: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  slogan?: string;

  @IsNumber()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  gamePoint?: number;

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  isLocated?: boolean;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  avatarUrl?: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  photoUrl?: string;

  @ValidateIf(nullable)
  @Field(() => GraphQLJSON, { nullable: true })
  location?: LocationEntity;
}
