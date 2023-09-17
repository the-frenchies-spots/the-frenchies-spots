import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ContactEntity } from '../entity/contact.entity';

import { PictureEntity } from '../entity/picture.entity';
import { PictureBusiness } from '../business/picture.business';
import { PictureInput } from '../dto/input/picture/picture.input';

@Resolver(() => ContactEntity)
export class PictureResolver {
  constructor(private readonly pictureBusiness: PictureBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => [PictureEntity])
  upload(
    @Args('pictureInput') pictureInput: PictureInput,
  ): Promise<PictureEntity[]> {
    return this.pictureBusiness.upload(pictureInput);
  }
}
