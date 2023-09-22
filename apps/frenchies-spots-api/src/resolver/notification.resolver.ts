import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';

import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { NotificationEntity } from '../entity/notification.entity';
import { NotificationBusiness } from '../business/notification.business';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';
import { DeleteResponse } from '../dto/response/delete.response';

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
  @Query(() => NotificationEntity)
  notificationByPk(
    @Args('notifId') notifId: string,
  ): Promise<NotificationEntity> {
    return this.notifBusiness.getById(notifId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Boolean)
  updateNotifStatus(@CurrentProfileId() profileId: string): Promise<boolean> {
    return this.notifBusiness.updateNotifStatus(profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NotificationEntity)
  sendNotif(
    @Args('sendNotifInput') sendNotifInput: SendNotifInput,
  ): Promise<NotificationEntity> {
    return this.notifBusiness.sendNotif(sendNotifInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => DeleteResponse)
  deleteNotif(@Args('notifId') notifId: string): Promise<DeleteResponse> {
    return this.notifBusiness.delete(notifId);
  }
}
