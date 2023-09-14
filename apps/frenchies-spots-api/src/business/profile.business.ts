import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/entity/user.entity';
import ErrorService from 'src/service/error.service';
import { codeErrors } from 'src/enum/code-errors.enum';

import { StripeService } from 'src/service/stripe.service';
import { AuthRepository } from 'src/repository/auth.repository';
import { ProfileRepository } from 'src/repository/Profile.repository';
import { BuyPointInput } from 'src/dto/input/buy-point/buy-point-input';

const { INTERNAL_SERVER_ERROR } = codeErrors;

@Injectable()
export class ProfileBusiness {
  constructor(
    private profileRepository: ProfileRepository,
    private stripeService: StripeService,
    private authRepository: AuthRepository,
  ) {}

  async buyPoint(buyPoint: BuyPointInput, userId: string): Promise<UserEntity> {
    const { amount, paymentId } = buyPoint;
    const { success } = await this.stripeService.charge(amount, paymentId);
    if (success) {
      const user = await this.authRepository.getOneById(userId);
      const userPoint = user?.profile?.gamePoint || 0;
      return this.profileRepository.updateProfilePoint(
        userId,
        userPoint + amount,
      );
    }
    throw new ErrorService(INTERNAL_SERVER_ERROR);
  }
}
