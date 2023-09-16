import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/service/prisma.service';
import { SpotBusiness } from '../src/business/spot.business';
import { SpotsInput } from '../src/dto/input/spot/spots-input';
import { Prisma } from '@prisma/client';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let spotBusiness: SpotBusiness;

  const mockPrismaService = {
    post: {
      getAll: jest.fn().mockResolvedValue([
        {
          id: "0",
          name: "Tour Eiffel",
          description: "Description Tour Eiffel",
          address: "Paris, France",
          isCanPark: true, 
          isHidden: false,
          category: "SPARE_TIME_SPOT",
        },
        {
          id: "1",
          name: "Mont Saint Michel",
          description: "Description Mont Saint Michel",
          address: "Normandie, France",
          isCanPark: true, 
          isHidden: true,
          category: "SPARE_TIME_SPOT",
        },
        {
          id: "2",
          name: "Cité du vin",
          description: "Description Cité du vin",
          address: "Bordeaux, France",
          isCanPark: true, 
          isHidden: true,
          category: "RESOURCES_SPOT",
        },
      ]),

      getById: jest.fn().mockResolvedValue({
        id: "0",
        name: "Tour Eiffel",
        description: "Description Tour Eiffel",
        address: "Paris, France",
        isCanPark: true, 
        isHidden: false,
        category: "SPARE_TIME_SPOT",
      }),

      update: jest.fn().mockResolvedValue({}),
      create: jest.fn().mockResolvedValue({}),
      delete: jest.fn().mockResolvedValue({}),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(PrismaService).useValue(mockPrismaService).compile();

    // const module: TestingModule = await Test.createTestingModule({
    //   imports: [AppModule],
    // }).compile();

    spotBusiness = module.get<SpotBusiness>(SpotBusiness);
    prisma = module.get<PrismaService>(PrismaService);

    app = module.createNestApplication();
    await app.init();
  });

  it('should get one spot by id', async () => {
    // expect(await spotBusiness.getById("0")).toBe({
    //   id: "0",
    //   name: "Tour Eiffel",
    //   description: "Description Tour Eiffel",
    //   address: "Paris, France",
    //   isCanPark: true, 
    //   isHidden: false,
    //   category: "SPARE_TIME_SPOT",
    // });

    return request(app.getHttpServer())
      .post('/slot/0')
      .expect(200)
      .expect(spotBusiness.getById("0"));

    //situation 1 : tableau vide car pas de spot sur les rayons
    //situation 2 : tableau avec spots
    //situation 3 : error
  });

  afterAll(async () => {
    app.close();
  });
});
