import { Field, InputType } from '@nestjs/graphql';
import { CategoriesSpotAndTag } from '@prisma/client';
import GraphQLJSON from 'graphql-type-json';
import { IsBoolean, IsNumber, IsString, ValidateIf } from 'class-validator';
import { GeoPointInput } from '../geo-point/geo-point-input';
import { nullable } from '../../../utils/nullable';

@InputType()
export class SpotsInput {
  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  id: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  profileId: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  orderBy: 'asc' | 'desc';

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  isCanPark: boolean;

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  isHidden: boolean;

  @Field({ nullable: true })
  @ValidateIf(nullable)
  category: CategoriesSpotAndTag;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  searchValue: string;

  @IsString({ each: true })
  @ValidateIf(nullable)
  @Field(() => [String], { nullable: true })
  tagListId: string[];

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  region: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  address: string;

  @IsNumber()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  skip: number;

  @Field(() => GraphQLJSON, { nullable: true })
  point: GeoPointInput;

  @IsNumber()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  take: number;
}
