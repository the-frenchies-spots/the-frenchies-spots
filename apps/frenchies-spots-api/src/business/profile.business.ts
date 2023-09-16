import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/entity/user.entity';
import ErrorService from 'src/service/error.service';
import { codeErrors } from 'src/enum/code-errors.enum';

import { StripeService } from 'src/service/stripe.service';
import { AuthRepository } from 'src/repository/auth.repository';
import { ProfileRepository } from 'src/repository/Profile.repository';
import { BuyPointInput } from 'src/dto/input/buy-point/buy-point-input';
import { ProfileInput } from 'src/dto/input/profile/profile.input';
import { ProfileEntity } from 'src/entity/profile.entity';
import { ProfilesInput } from 'src/dto/input/profile/profiles.input';
import { GeospatialService } from 'src/service/spot-geospatial.service';

const { INTERNAL_SERVER_ERROR, USER_NOT_FOUND } = codeErrors;

@Injectable()
export class ProfileBusiness {
  constructor(
    private profileRepository: ProfileRepository,
    private stripeService: StripeService,
    private authRepository: AuthRepository,
    private geoService: GeospatialService,
  ) {}

  async getAll(profilesInput: ProfilesInput): Promise<ProfileEntity[]> {
    const { point } = profilesInput;
    if (point) {
      return this.geoService.searchPeopleArround(point).then((profiles) => {
        const result = profiles?.length
          ? profiles.map((profile) => ({
              ...profile._doc,
              id: profile._doc._id,
            }))
          : [];
        return result;
      });
    }
    return this.profileRepository.getAll();
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
}
