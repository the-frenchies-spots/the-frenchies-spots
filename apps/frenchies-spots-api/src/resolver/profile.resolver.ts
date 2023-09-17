import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { Public } from '../decorator/public.decorator';
import { ProfileEntity } from '../entity/profile.entity';
import { ProfileBusiness } from '../business/profile.business';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { CurrentUserId } from '../decorator/currentUserId.decorator';
import { BuyPointInput } from '../dto/input/buy-point/buy-point-input';
import { ProfilesInput } from '../dto/input/profile/profiles.input';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { CurrentProfileId } from 'src/decorator/currentProfileId.decorator.';

@Resolver(() => UserEntity)
export class ProfileResolver {
  constructor(private readonly profileBusiness: ProfileBusiness) {}

  @Public()
  @Query(() => [ProfileEntity])
  @UseGuards(PublicTokenGuard)
  profiles(
    @Args('profilesInput') profilesInput: ProfilesInput,
    @CurrentProfileId() profileId: string | undefined,
  ): Promise<ProfileEntity[]> {
    return this.profileBusiness.getAll(profilesInput, profileId);
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
