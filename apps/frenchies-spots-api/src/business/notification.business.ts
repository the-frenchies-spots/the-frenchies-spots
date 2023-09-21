import { Injectable } from '@nestjs/common';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationEntity } from '../entity/notification.entity';
import { DeleteResponse } from '../dto/response/delete.response';

@Injectable()
export class NotificationBusiness {
  constructor(private notificationRepository: NotificationRepository) {}

  async getAll(profileId): Promise<NotificationEntity[]> {
    return this.notificationRepository.getAll(profileId);
  }

  async getById(notifId: string): Promise<NotificationEntity> {
    return this.notificationRepository.getById(notifId);
  }

  async sendNotif(sendNotifInput: SendNotifInput): Promise<NotificationEntity> {
    return this.notificationRepository.sendNotif(sendNotifInput);
  }

  async updateNotifStatus(profileId: string): Promise<boolean> {
    return this.notificationRepository.updateNotifStatus(profileId);
  }

  async delete(notifId: string): Promise<DeleteResponse> {
    const deleted = await this.notificationRepository.delete(notifId);
    return { deleted };
  }
}
