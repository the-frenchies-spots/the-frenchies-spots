import * as request from 'supertest';
import { DocumentNode } from 'graphql';
import { mutations } from '@frenchies-spots/gql';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, INestApplication } from '@nestjs/common';

import {
  createSpotResponse,
  mockSpotRepository,
} from '../../mocks/repository/mock.spot.repository';
import { mockGeospatialService } from '../../mocks/service/mock.geospatial.service';
import {
  mockAuthRepository,
  mockUser,
} from '../../mocks/repository/mock.auth.repository';

import { AppModule } from '../../../src/app.module';
import { PublicTokenGuard } from '../../../src/guard/publicToken.guard';
import { SpotRepository } from '../../../src/repository/spot.repository';
import { AuthRepository } from '../../../src/repository/auth.repository';
import { RefreshTokenGuard } from '../../../src/guard/refreshToken.guard';
import { GeospatialService } from '../../../src/service/spot-geospatial.service';
import { codeErrors } from '../../../src/enum/code-errors.enum';

describe('AppController (e2e)', () => {
  jest.setTimeout(60000);
  let app: INestApplication;
  let mutation: (mutation: DocumentNode, variables?: unknown) => request.Test;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(PublicTokenGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => {
          const ctx = GqlExecutionContext.create(context);
          ctx.getContext().req.user = mockUser.user;
          return true;
        },
      })

      .overrideGuard(RefreshTokenGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => {
          const ctx = GqlExecutionContext.create(context);
          ctx.getContext().req.user = mockUser.user;
          return true;
        },
      })

      .overrideProvider(GeospatialService)
      .useValue(mockGeospatialService)
      .overrideProvider(SpotRepository)
      .useValue(mockSpotRepository)
      .overrideProvider(AuthRepository)
      .useValue(mockAuthRepository)
      .compile();

    app = module.createNestApplication();
    await app.init();

    mutation = (mutation: DocumentNode, variables?: unknown) => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: mutation.loc && mutation.loc.source.body,
          variables,
        })
        .set('authorization', `Bearer ${mockUser.refreshToken}`);
    };
  });

  it('should create spot', async () => {
    const data = await mutation(mutations.insertSpot, {
      insertSpotInput: {
        address: '123 Main Street',
        category: 'SPARE_TIME_SPOT',
        description: 'A beautiful park with playground',
        isCanPark: true,
        isHidden: false,
        name: 'Central Park',
        region: 'New York',
        pictures: [{ hostId: '', url: 'url' }],
        tags: [],
        location: {
          type: 'Point',
          coordinates: [-0.694273, 44.952945],
        },
      },
    });

    const spot = JSON.parse(data?.text)?.data?.insertSpot;
    expect(spot).toEqual(createSpotResponse);
  });

  it('should not create spot with bad input', async () => {
    const data = await mutation(mutations.insertSpot, {});
    const spotErrors = JSON.parse(data?.text);
    const error = spotErrors?.errors[0];
    const code = error.extensions.code;
    expect(code).toEqual(codeErrors.BAD_USER_INPUT);
  });

  afterAll(async () => {
    app.close();
  });
});
