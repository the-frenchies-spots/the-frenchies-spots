import { Field, InputType } from '@nestjs/graphql';
import { IsString, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class FavoriteInput {
  @IsString()
  @Field()
  spotId: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  favoriteId?: string;
}
