import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { Public } from '../decorator/public.decorator';
import { SpotEntity } from '../entity/spot.entity';
import { SpotBusiness } from './../business/spot.business';
import { SpotInput } from '../dto/input/spot/spot-input';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { SpotsInput } from '../dto/input/spot/spots-input';
import { PublicTokenGuard } from '../guard/publicToken.guard';
import { DeleteResponse } from '../dto/response/delete.response';
import { SpotByIdResponse } from '../dto/spotByIdResponse';

@Resolver(() => SpotEntity)
export class SpotResolver {
  constructor(private readonly spotBusiness: SpotBusiness) {}

  @Public()
  @Query(() => SpotByIdResponse)
  @UseGuards(PublicTokenGuard)
  spotByPk(
    @Args('id', { type: () => String }) id: string,
    @CurrentProfileId() profileId: string | undefined,
  ): Promise<SpotByIdResponse> {
    console.log('======================================================');
    console.log('JE PASSE DANS LE RESOLVEUR');
    console.log('======================================================');
    return this.spotBusiness.getById(id, profileId);
  }

  @Public()
  @Query(() => [SpotEntity])
  @UseGuards(PublicTokenGuard)
  spots(
    @Args('spotsInput') spotsInput: SpotsInput,
    @CurrentProfileId() profileId: string | undefined,
  ): Promise<SpotEntity[]> {
    return this.spotBusiness.getAll(spotsInput, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => SpotEntity)
  insertSpot(
    @Args('insertSpotInput') insertSpotInput: SpotInput,
    @CurrentProfileId() profileId: string,
  ): Promise<SpotEntity> {
    return this.spotBusiness.insert(insertSpotInput, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => SpotEntity)
  updateSpot(
    @Args('updateSpotInput') updateSpotInput: SpotInput,
    @CurrentProfileId() profileId: string,
  ): Promise<SpotEntity> {
    return this.spotBusiness.update(updateSpotInput, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => DeleteResponse)
  deleteSpot(
    @Args('id', { type: () => String }) id: string,
    @CurrentProfileId() profileId: string,
  ): Promise<DeleteResponse> {
    return this.spotBusiness.delete(id, profileId);
  }
}
