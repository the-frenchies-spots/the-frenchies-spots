import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class SpotPictureInput {
  @IsString()
  @Field()
  url: string;

  @IsString()
  @Field()
  hostId: string;
}
