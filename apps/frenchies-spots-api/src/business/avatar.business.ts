import { Injectable } from '@nestjs/common';

import { AvatarInput } from '../dto/input/avatar/avatar.input';
import { AvatarRepository } from '../repository/avatar.repository';
import { ProfileRepository } from '../repository/profile.repository';
import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';
import { ProfileEntity } from '../entity/profile.entity';

const { ACCESS_DENIED } = codeErrors;

@Injectable()
export class AvatarBusiness {
  constructor(
    private avatarRepository: AvatarRepository,
    private profileRepository: ProfileRepository,
  ) {}

  async buy(
    avatarInput: AvatarInput,
    profileId: string,
  ): Promise<ProfileEntity> {
    const { pointsRequire } = avatarInput;

    const profile = await this.profileRepository.getById(profileId);
    if (!profile || pointsRequire > profile.gamePoint) {
      throw new ErrorService(ACCESS_DENIED);
    }

    return this.avatarRepository.buy(
      avatarInput,
      profile.gamePoint - pointsRequire,
      profileId,
    );
  }
}
