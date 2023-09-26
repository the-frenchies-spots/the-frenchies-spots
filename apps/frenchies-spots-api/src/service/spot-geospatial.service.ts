import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Spot } from '../schema/spot.shema';
import { GeoPointInput } from '../dto/input/geo-point/geo-point-input';
import { ProfileEntity } from '../entity/profile.entity';

@Injectable()
export class GeospatialService {
  constructor(
    @InjectModel('Spot') private spotModel: mongoose.Model<Spot>,
    @InjectModel('Profile') private profileModel: mongoose.Model<ProfileEntity>,
  ) {}

  async searchPeopleArround(
    point: GeoPointInput,
  ): Promise<{ _doc: Omit<ProfileEntity, 'id'> & { _id: string } }[]> {
    const { coordinates, maxDistance } = point;
    return this.profileModel.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates,
          },
          $maxDistance: maxDistance,
        },
      },
    });
  }

  async searchArround(point: GeoPointInput): Promise<{ _id: string }[]> {
    const { coordinates, maxDistance } = point;
    return this.spotModel.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates,
          },
          $maxDistance: maxDistance,
        },
      },
    });
  }
}
