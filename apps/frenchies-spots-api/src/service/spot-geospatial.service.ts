import { Injectable } from '@nestjs/common';
import mongoose, { ConnectOptions } from 'mongoose';

import { transformDocument } from '../utils/transform-document';
import { GeoPointInput } from '../dto/input/geo-point/geo-point-input';

@Injectable()
export class GeospatialService {
  // constructor() {
  //   mongoose.connect('mongodb://localhost:27017/votre_base_de_données', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   } as ConnectOptions);
  // }
  // async searchPeopleArround(point: GeoPointInput): Promise<string[]> {
  //   const { coordinates, maxDistance } = point;
  //   const ProfileSchema = new mongoose.Schema({
  //     pseudo: { type: String, required: true },
  //   });
  //   ProfileSchema.index({ location: '2dsphere' });
  //   const ProfileModel = mongoose.model('Profile', ProfileSchema, 'Profile');
  //   const profiles = await ProfileModel.find<{ _id: mongoose.Types.ObjectId }>({
  //     location: {
  //       $near: {
  //         $geometry: {
  //           type: 'Point',
  //           coordinates,
  //         },
  //         $maxDistance: maxDistance,
  //       },
  //     },
  //   });
  //   return transformDocument(profiles);
  // }
  // async searchArround(point: GeoPointInput): Promise<string[]> {
  //   const { coordinates, maxDistance } = point;
  //   const SpotSchema = new mongoose.Schema({
  //     pseudo: { type: String, required: true },
  //   });
  //   SpotSchema.index({ location: '2dsphere' });
  //   const SpotModel = mongoose.model('Spot', SpotSchema, 'Spot');
  //   const profiles = await SpotModel.find<{ _id: mongoose.Types.ObjectId }>({
  //     location: {
  //       $near: {
  //         $geometry: {
  //           type: 'Point',
  //           coordinates,
  //         },
  //         $maxDistance: maxDistance,
  //       },
  //     },
  //   });
  //   return transformDocument(profiles);
  // }
}
