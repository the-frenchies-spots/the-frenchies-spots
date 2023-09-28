import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, ValidateIf } from 'class-validator';
import { nullable } from '../../../utils/nullable';
@InputType()
export class ContactsInput {
  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  authorization?: boolean;

  @IsBoolean()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  isFriend?: boolean;
}
