import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { ProfileBusiness } from '../business/profile.business';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { CurrentUserId } from '../decorator/currentUserId.decorator';
import { BuyPointInput } from '../dto/input/buy-point/buy-point-input';

@Resolver(() => UserEntity)
export class ProfileResolver {
  constructor(private readonly profileBusiness: ProfileBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => UserEntity)
  buyPoint(
    @Args('buyPoint') buyPoint: BuyPointInput,
    @CurrentUserId() userId: string,
  ): Promise<UserEntity> {
    return this.profileBusiness.buyPoint(buyPoint, userId);
  }
}
