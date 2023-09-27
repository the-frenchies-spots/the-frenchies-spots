import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { UserEntity } from '../entity/user.entity';
import { SignUpInput } from '../dto/signup-input';
import { SignInInput } from '../dto/signin-input';
import { SignResponse } from '../dto/sign-response';
import { Public } from '../decorator/public.decorator';
import { AuthBusiness } from '../business/auth.business';
import { LogoutResponse } from '../dto/logout-response';
import { UseGuards } from '@nestjs/common';
import { CurrentUserId } from '../decorator/currentUserId.decorator';
import { CurrentUser } from '../decorator/currentUser.decorator';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { NewTokensResponse } from '../dto/newTokensResponse';

@Resolver(() => UserEntity)
export class AuthResolver {
  constructor(private readonly authBusiness: AuthBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => UserEntity)
  getLoginUser(@CurrentUserId() userId: string): Promise<UserEntity> {
    return this.authBusiness.getById(userId);
  }

  @Public()
  @Mutation(() => SignResponse)
  signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authBusiness.signup(signUpInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authBusiness.signin(signInInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => LogoutResponse)
  logout(@CurrentUserId() userId: string) {
    return this.authBusiness.logout(userId);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokensResponse)
  getNewTokens(
    @CurrentUserId() userId: string,
    @CurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authBusiness.getNewTokens(userId, refreshToken);
  }
}
