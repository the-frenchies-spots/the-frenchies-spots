import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class ContactRepository {
  constructor(private prisma: PrismaService) {}

  async connectContacts(
    profileId: string,
    participantIds: string[],
  ): Promise<boolean> {
    return this.prisma.profile
      .update({
        where: { id: profileId },
        data: {
          contacts: {
            create: participantIds.map((id) => {
              return {
                contact: {
                  connect: { id },
                },
              };
            }),
          },
        },
        include: { contacts: { include: { contact: true } } },
      })
      .then(() => true)
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
