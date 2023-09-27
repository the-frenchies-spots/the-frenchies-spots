import { DeleteResponse } from "../../../src/dto/response/delete.response";
import { SpotEntity } from "../../../src/entity/spot.entity";

export const getByIdResponse = {
  id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
  name: 'Tour Eiffel',
  description: 'Description Tour Eiffel',
  favorites: null,
  address: 'Paris, France',
  isCanPark: true,
  isHidden: false,
  category: 'SPARE_TIME_SPOT',
  createdAt: null,
  averageRating: 5,
  region: '3',
  spotPicture: null,
  tags: null,
  profileId: '',
  rating: null,
  location: {
    type: 'Point',
    coordinates: [0, 0],
  },
};

export const getAllResponse = [
  {
      id: '4bf71b15-c63f-4903-83b3-fa90c799705d',
      name: 'Tour Eiffel',
      description: 'Description Tour Eiffel',
      address: 'Paris, France',
      isCanPark: true,
      isHidden: false,
      category: 'SPARE_TIME_SPOT',
      averageRating: 3,
      profileId: '',
      region: 'region',
      favorites: null,
      location: null,
      ratings: null,
      spotPicture: null,
  },
  {
    id: '397c7722-9cd9-4f8a-9063-dc64ab5f0d59',
    name: 'Mont Saint Michel',
    description: 'Description Mont Saint Michel',
    address: 'Normandie, France',
    isCanPark: true,
    isHidden: true,
    category: 'SPARE_TIME_SPOT',
    averageRating: 3,
    profileId: '',
    region: 'region2',
    favorites: null,
    location: null,
    ratings: null,
    spotPicture: null,
  },
  {
    id: 'e22f79b2-a7c3-45d0-9013-b36255e78a49',
    name: 'Cité du vin',
    description: 'Description Cité du vin',
    address: 'Bordeaux, France',
    isCanPark: true,
    isHidden: true,
    category: 'RESOURCES_SPOT',
    averageRating: 3,
    profileId: '',
    region: 'region',
    favorites: null,
    location: null,
    ratings: null,
    spotPicture: null,
  }
];

export const createSpotResponse: SpotEntity = {
  category: undefined,
  profile: undefined,
  updatedAt: undefined,
  id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
  name: 'Tour Eiffel',
  description: 'Description Tour Eiffel',
  address: 'Paris, France',
  isCanPark: true,
  isHidden: false,
  createdAt: null,
  averageRating: 5,
  region: '3',
  spotPicture: null,
  tags: null,
  profileId: '',
  location: {
    type: 'Point',
    coordinates: [0, 0],
  }
}

export const updateSpotResponse: SpotEntity = {
  category: undefined,
  profile: undefined,
  updatedAt: undefined,
  profileId: 'profileIdMock',
  id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
  name: 'Tour Eiffel',
  description: 'Description Tour Eiffel',
  address: 'Paris, France',
  isCanPark: true,
  isHidden: false,
  createdAt: null,
  averageRating: 5,
  region: '3',
  spotPicture: null,
  tags: null,
  location: {
    type: 'Point',
    coordinates: [0, 0],
  }
}

export const deleteSpotResponse: DeleteResponse = {
  deleted: true,
}

export const mockSpotRepository = {
  getAll: jest.fn().mockResolvedValue(getAllResponse),

  getById: jest.fn().mockResolvedValue(getByIdResponse),

  update: jest.fn().mockResolvedValue(updateSpotResponse),

  create: jest.fn().mockResolvedValue(createSpotResponse),

  delete: jest.fn().mockResolvedValue({}),
};
