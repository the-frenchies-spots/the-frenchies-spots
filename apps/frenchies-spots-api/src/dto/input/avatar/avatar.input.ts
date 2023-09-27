import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@InputType()
export class AvatarInput {
  @IsString()
  @Field()
  avatarId: string;

  @IsNumber()
  @Field()
  pointsRequire: number;
}
