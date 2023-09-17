import { Resolver, Query, Mutation } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';

import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { NotificationEntity } from '../entity/notification.entity';
import { NotificationBusiness } from '../business/notification.business';

@Resolver(() => NotificationEntity)
export class NotificationResolver {
  constructor(private readonly notifBusiness: NotificationBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => [NotificationEntity])
  notifications(
    @CurrentProfileId() profileId: string,
  ): Promise<NotificationEntity[]> {
    return this.notifBusiness.getAll(profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => [Boolean])
  updateNotifStatus(@CurrentProfileId() profileId: string): Promise<boolean> {
    return this.notifBusiness.updateNotifStatus(profileId);
  }
}
