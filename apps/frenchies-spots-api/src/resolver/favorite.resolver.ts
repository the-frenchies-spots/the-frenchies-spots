import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { FavoriteEntity } from '../entity/favorite.entity';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { FavoriteBusiness } from '../business/favorite.business';
import { FavoriteInput } from '../dto/input/favorite/favorite-input';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';
import { ToggleFavoriteResponse } from '../dto/response/toggle-favorite-response';
import { SpotEntity } from '../entity/spot.entity';

@Resolver(() => FavoriteEntity)
export class FavoriteResolver {
  constructor(private readonly favoriteBusiness: FavoriteBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => [SpotEntity])
  spotsFavorite(@CurrentProfileId() profileId: string): Promise<SpotEntity[]> {
    return this.favoriteBusiness.getAllByProfileId(profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ToggleFavoriteResponse)
  toggleFavorite(
    @Args('favoriteInput') favoriteInput: FavoriteInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ToggleFavoriteResponse> {
    return this.favoriteBusiness.createOrDelete(favoriteInput, profileId);
  }
}
