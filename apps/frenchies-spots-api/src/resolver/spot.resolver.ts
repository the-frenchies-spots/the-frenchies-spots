import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';

import { Public } from '../decorator/public.decorator';
import { SpotEntity } from 'src/entity/spot.entity';
import { SpotBusiness } from './../business/spot.business';
import { SpotInput } from 'src/dto/input/spot/spot-input';
import { CurrentProfileId } from 'src/decorator/currentProfileId.decorator.';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from 'src/guard/refreshToken.guard';
import { SpotsInput } from 'src/dto/input/spot/spots-input';
import { PublicTokenGuard } from 'src/guard/publicToken.guard';
import { DeleteResponse } from 'src/dto/response/delete.response';
import { SpotByIdResponse } from 'src/dto/spotByIdResponse';

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
