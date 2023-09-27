import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class PictureInput {
  @IsString({ each: true })
  @Field(() => [String])
  files: string[];

  @IsString()
  @Field()
  folder: string;
}
