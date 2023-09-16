import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SpotPictureInput {
  @Field()
  url: string;

  @Field()
  hostId: string;
}
