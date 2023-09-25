import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GeoPointInput } from '../dto/input/geo-point/geo-point-input';
import { transformDocument } from '../utils/transform-document';
import { ProfileModel, SpotModel } from './mongoose.service';

@Injectable()
export class GeospatialService {
  async searchPeopleArround(point: GeoPointInput): Promise<string[]> {
    const { coordinates, maxDistance } = point;
    const profiles = await ProfileModel.find<{ _id: mongoose.Types.ObjectId }>({
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
    return transformDocument(profiles);
  }

  async searchArround(point: GeoPointInput): Promise<string[]> {
    const { coordinates, maxDistance } = point;
    const profiles = await SpotModel.find<{ _id: mongoose.Types.ObjectId }>({
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
    return transformDocument(profiles);
  }
}
