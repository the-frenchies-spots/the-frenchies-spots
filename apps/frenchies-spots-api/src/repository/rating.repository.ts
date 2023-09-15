import { ObjectId } from 'mongodb';
import { Injectable } from '@nestjs/common';

import { RatingInput } from '../dto/input/rating/rating-input';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { RatingEntity } from '../entity/rating.entity';
import { PrismaService } from '../service/prisma.service';
import { TAverageResponse } from '../type/average-response';
import { plainToClass } from '../utils/plain-to-class';

@Injectable()
export class RatingRepository {
  constructor(private prisma: PrismaService) {}

  async createOrUpdate(
    ratingInput: RatingInput,
    profileId: string,
  ): Promise<RatingEntity> {
    const { rate, ratingId, spotId } = ratingInput;

    const rating = await this.prisma.rating.upsert({
      where: { id: ratingId || new ObjectId().toString() },
      update: { rate, profileId },
      create: {
        rate,
        profileId,
        spotId,
      },
    });

    return plainToClass(rating, RatingEntity);
  }

  async getSpotAverageRating(spotId: string): Promise<TAverageResponse> {
    const average = this.prisma.rating.aggregate({
      where: { spotId },
      _avg: {
        rate: true,
      },
      _count: {
        rate: true,
      },
    });
    return average;
  }

  async getAll(filterData?: TagListInput) {
    const { searchValue = '' } = filterData;
    return this.prisma.tag.findMany({
      where: {
        category: filterData?.category,
        id: {
          in: filterData?.ids,
        },
        name: {
          contains: searchValue,
        },
      },
    });
  }
}
