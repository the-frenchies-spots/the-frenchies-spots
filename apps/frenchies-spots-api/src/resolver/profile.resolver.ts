import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import { Public } from 'src/decorator/public.decorator';
import { ProfileEntity } from 'src/entity/profile.entity';
import { ProfileBusiness } from 'src/business/profile.business';
import { RefreshTokenGuard } from 'src/guard/refreshToken.guard';
import { ProfileInput } from 'src/dto/input/profile/profile.input';
import { CurrentUserId } from 'src/decorator/currentUserId.decorator';
import { BuyPointInput } from 'src/dto/input/buy-point/buy-point-input';
import { ProfilesInput } from 'src/dto/input/profile/profiles.input';

@Resolver(() => UserEntity)
export class ProfileResolver {
  constructor(private readonly profileBusiness: ProfileBusiness) {}

  @Public()
  @Query(() => [ProfileEntity])
  profiles(
    @Args('profilesInput') profilesInput: ProfilesInput,
  ): Promise<ProfileEntity[]> {
    return this.profileBusiness.getAll(profilesInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => UserEntity)
  buyPoint(
    @Args('buyPoint') buyPoint: BuyPointInput,
    @CurrentUserId() userId: string,
  ): Promise<UserEntity> {
    return this.profileBusiness.buyPoint(buyPoint, userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => UserEntity)
  updateProfile(
    @Args('profileInput') profileInput: ProfileInput,
    @CurrentUserId() userId: string,
  ): Promise<UserEntity> {
    return this.profileBusiness.updateProfile(profileInput, userId);
  }
}
