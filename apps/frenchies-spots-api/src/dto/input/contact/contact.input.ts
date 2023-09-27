import { Field, InputType } from '@nestjs/graphql';

import { IsString, IsBoolean, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';

@InputType()
export class ContactInput {
  @IsString()
  @Field()
  id: string;

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  authorization?: boolean;

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  isFriend?: boolean;
}
