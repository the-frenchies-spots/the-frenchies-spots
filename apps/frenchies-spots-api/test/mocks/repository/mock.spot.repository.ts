export const mockSpotRepository = {
  getAll: jest.fn().mockResolvedValue([
    {
      id: '4bf71b15-c63f-4903-83b3-fa90c799705d',
      name: 'Tour Eiffel',
      description: 'Description Tour Eiffel',
      address: 'Paris, France',
      isCanPark: true,
      isHidden: false,
      category: 'SPARE_TIME_SPOT',
    },
    {
      id: '397c7722-9cd9-4f8a-9063-dc64ab5f0d59',
      name: 'Mont Saint Michel',
      description: 'Description Mont Saint Michel',
      address: 'Normandie, France',
      isCanPark: true,
      isHidden: true,
      category: 'SPARE_TIME_SPOT',
    },
    {
      id: 'e22f79b2-a7c3-45d0-9013-b36255e78a49',
      name: 'Cité du vin',
      description: 'Description Cité du vin',
      address: 'Bordeaux, France',
      isCanPark: true,
      isHidden: true,
      category: 'RESOURCES_SPOT',
    },
  ]),

  getById: jest.fn().mockResolvedValue({
    id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
    name: 'Tour Eiffel',
    description: 'Description Tour Eiffel',
    address: 'Paris, France',
    isCanPark: true,
    isHidden: false,
    category: 'SPARE_TIME_SPOT',
    averageRating: 5,
    region: '3',
    profileId: '',
    location: {
      type: 'Point',
      coordinates: [0, 0],
    },
    createdAt: null,
    updtaedAt: null,
  }),

  update: jest.fn().mockResolvedValue({}),
  create: jest.fn().mockResolvedValue({}),
  delete: jest.fn().mockResolvedValue({}),
};
