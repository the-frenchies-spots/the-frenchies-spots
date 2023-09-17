import { Injectable } from '@nestjs/common';

import { plainToClass, plainToClassMany } from '../utils/plain-to-class';
import { PrismaService } from '../service/prisma.service';
import { NotificationEntity } from '../entity/notification.entity';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';

@Injectable()
export class NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(profileId: string): Promise<NotificationEntity[]> {
    const notifs = await this.prisma.notification.findMany({
      where: { profileId },
    });
    return plainToClassMany(notifs, NotificationEntity);
  }

  async sendNotif(sendNotifInput: SendNotifInput): Promise<NotificationEntity> {
    const notif = await this.prisma.notification.create({
      data: sendNotifInput,
    });
    return plainToClass(notif, NotificationEntity);
  }

  async updateNotifStatus(profileId: string): Promise<boolean> {
    return this.prisma.notification
      .updateMany({
        where: { profileId },
        data: { isRead: true },
      })
      .then(() => true)
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
