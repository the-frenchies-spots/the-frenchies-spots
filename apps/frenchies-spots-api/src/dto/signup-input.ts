import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
  ValidateIf,
} from 'class-validator';
import { nullable } from '../utils/nullable';

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  pseudo: string;

  @IsString()
  @ValidateIf(nullable)
  @Field({ nullable: true })
  photoUrl?: string;

  @IsString()
  @Field()
  avatarUrl: string;

  @IsBoolean()
  @Field()
  isLocated: boolean;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  slogan: string;
}
