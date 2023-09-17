import { Injectable } from '@nestjs/common';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationEntity } from '../entity/notification.entity';

@Injectable()
export class NotificationBusiness {
  constructor(private notificationRepository: NotificationRepository) {}

  async getAll(profileId): Promise<NotificationEntity[]> {
    return this.notificationRepository.getAll(profileId);
  }

  async sendNotif(sendNotifInput: SendNotifInput): Promise<NotificationEntity> {
    return this.notificationRepository.sendNotif(sendNotifInput);
  }

  async updateNotifStatus(profileId: string): Promise<boolean> {
    return this.notificationRepository.updateNotifStatus(profileId);
  }
}
