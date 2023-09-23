import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { AvatarEntity } from '../entity/avatar.entity';
import { AvatarInput } from '../dto/input/avatar/avatar.input';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { ProfileEntity } from '../entity/profile.entity';
import { AvatarBusiness } from '../business/avatar.business';

@Resolver(() => AvatarEntity)
export class AvatarResolver {
  constructor(private readonly avatarBusiness: AvatarBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ProfileEntity)
  buyAvatar(
    @Args('avatarsInput') avatarsInput: AvatarInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ProfileEntity> {
    return this.avatarBusiness.buy(avatarsInput, profileId);
  }
}
