import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PictureInput {
  @Field(() => [String])
  files: string[];

  @Field()
  folder: string;
}
