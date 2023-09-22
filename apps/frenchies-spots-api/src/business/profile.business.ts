import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entity/user.entity';
import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';

import { StripeService } from '../service/stripe.service';
import { AuthRepository } from '../repository/auth.repository';
import { ProfileRepository } from '../repository/profile.repository';
import { BuyPointInput } from '../dto/input/buy-point/buy-point-input';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { ProfileEntity } from '../entity/profile.entity';
import { ProfilesInput } from '../dto/input/profile/profiles.input';
import { GeospatialService } from '../service/spot-geospatial.service';
import { ContactBusiness } from './contact.business';
import { NotificationRepository } from '../repository/notification.repository';
import { ENotif } from '../enum/notif.enum';
import { ContactRepository } from '../repository/contact.repository';

const { INTERNAL_SERVER_ERROR, USER_NOT_FOUND, ACCESS_DENIED } = codeErrors;

@Injectable()
export class ProfileBusiness {
  constructor(
    private contactBusiness: ContactBusiness,
    private contactRepository: ContactRepository,
    private notificationRepository: NotificationRepository,
    private profileRepository: ProfileRepository,
    private stripeService: StripeService,
    private authRepository: AuthRepository,
    private geoService: GeospatialService,
  ) {}

  async getAll(
    profilesInput: ProfilesInput,
    profileId: string | undefined,
  ): Promise<ProfileEntity[]> {
    const { point } = profilesInput;
    if (point) {
      return this.geoService.searchPeopleArround(point).then((profiles) => {
        const ids = profiles?.length
          ? profiles.map((profile) => profile._doc._id)
          : [];
        if (ids?.length) {
          return this.profileRepository.getAll(profileId, ids);
        }
        return [];
      });
    }
    return this.profileRepository.getAll(profileId);
  }

  async getFriendById(
    profileId: string,
    friendId: string,
  ): Promise<ProfileEntity> {
    const friend = await this.profileRepository.getById(profileId, friendId);
    if (!friend?.contacts[0]?.isFriend) {
      throw new ErrorService(ACCESS_DENIED);
    }
    return friend;
  }

  async getUserOrThrow(userId: string): Promise<UserEntity> {
    const user = await this.authRepository.getOneById(userId);
    if (!user) {
      throw new ErrorService(USER_NOT_FOUND);
    }
    return user;
  }

  async buyPoint(buyPoint: BuyPointInput, userId: string): Promise<UserEntity> {
    const { amount, paymentId } = buyPoint;
    const { success } = await this.stripeService.charge(amount, paymentId);
    if (success) {
      const user = await this.getUserOrThrow(userId);
      const userPoint = user?.profile?.gamePoint || 0;
      return this.profileRepository.update(
        { gamePoint: userPoint + amount },
        userId,
      );
    }
    throw new ErrorService(INTERNAL_SERVER_ERROR);
  }

  async updateProfile(
    profileInput: ProfileInput,
    userId: string,
  ): Promise<UserEntity> {
    await this.getUserOrThrow(userId);
    return this.profileRepository.update(profileInput, userId);
  }

  async friendRequest(profileId: string, friendId: string): Promise<boolean> {
    const contactExist = this.contactRepository.getByContactId(
      profileId,
      friendId,
    );

    if (!contactExist) {
      const connected = await this.contactBusiness.connectAllContacts([
        profileId,
        friendId,
      ]);
      if (!connected) throw new ErrorService(INTERNAL_SERVER_ERROR);
    }

    const notif = await this.notificationRepository.sendNotif({
      profileId: friendId,
      type: ENotif.FRIEND_REQUEST,
      profileSenderId: profileId,
    });

    return !!notif;
  }
}
