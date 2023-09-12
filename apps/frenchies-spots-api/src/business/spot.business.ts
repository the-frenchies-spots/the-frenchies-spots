import { Injectable } from '@nestjs/common';

import { SpotEntity } from 'src/entity/spot.entity';
import ErrorService from 'src/service/error.service';
import { codeErrors } from 'src/enum/code-errors.enum';
import { SpotInput } from 'src/dto/input/spot/spot-input';
import { SpotByIdResponse } from 'src/dto/spotByIdResponse';
import { SpotsInput } from 'src/dto/input/spot/spots-input';
import { SpotRepository } from 'src/repository/spot.repository';
import { DeleteResponse } from 'src/dto/response/delete.response';
import { SpotGeospatialService } from 'src/service/spot-geospatial.service';

const { SPOT_NOT_FOUND, SPOT_ID_NOT_MATCH_PROFILE_ID } = codeErrors;

@Injectable()
export class SpotBusiness {
  constructor(
    private spotRepository: SpotRepository,
    private geoService: SpotGeospatialService,
  ) {}

  async getById(
    id: string,
    profileId?: string | undefined,
  ): Promise<SpotByIdResponse> {
    return this.spotRepository.getById(id, profileId);
  }

  async getAll(
    spotsInput: SpotsInput,
    profileId: string | undefined,
  ): Promise<SpotEntity[]> {
    const { point, ...fields } = spotsInput;
    if (point) {
      return this.geoService.searchArround(point).then((spotAround) => {
        const ids = spotAround.length
          ? spotAround.map((spot) => spot._id.toHexString())
          : undefined;
        if (ids.length) {
          return this.spotRepository.getAll(fields, ids, profileId);
        }
        return [];
      });
    }
    return this.spotRepository.getAll(fields, undefined, profileId);
  }

  async insert(
    insertSpotInput: SpotInput,
    profileId: string,
  ): Promise<SpotEntity> {
    return await this.spotRepository.create(insertSpotInput, profileId);
  }

  async update(
    updateSpotInput: SpotInput,
    profileId: string,
  ): Promise<SpotEntity> {
    this.checkUserIsOwner(updateSpotInput.id, profileId);
    return await this.spotRepository.update(updateSpotInput);
  }

  async checkUserIsOwner(
    spotId: string,
    currentProfileId: string,
  ): Promise<void> {
    const spot = await this.spotRepository.getById(spotId);
    if (!spot) throw new ErrorService(SPOT_NOT_FOUND, spotId);
    if (currentProfileId !== spot.profileId)
      throw new ErrorService(SPOT_ID_NOT_MATCH_PROFILE_ID);
  }

  async delete(id: string, profileId: string): Promise<DeleteResponse> {
    const deleted = await this.spotRepository.delete(id, profileId);
    return { deleted };
  }
}
