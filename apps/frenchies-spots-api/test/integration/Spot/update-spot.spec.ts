import * as request from 'supertest';
import { DocumentNode } from 'graphql';
import { mutations } from '@frenchies-spots/gql';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, INestApplication } from '@nestjs/common';

import {
  updateSpotResponse,
  mockSpotRepository,
  requestResponse,
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
import { mockJwtPayload } from '../../mocks/mockJwtPayload';
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
          ctx.getContext().req.user = mockJwtPayload;
          return true;
        },
      })

      .overrideGuard(RefreshTokenGuard)
      .useValue({
        canActivate: (context: ExecutionContext) => {
          const ctx = GqlExecutionContext.create(context);
          ctx.getContext().req.user = mockJwtPayload;
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

  it('should update spot', async () => {
    const data = await mutation(mutations.updateSpot, {
      updateSpotInput: {
        id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
        address: 'Paris, France',
        category: 'SPARE_TIME_SPOT',
        description: 'Une grande tour',
        isCanPark: true,
        isHidden: false,
        name: 'Tour Eiffel',
        region: 'Ile de France',
        tags: [],
        pictures: [{ url: '', hostId: '' }],
      },
    });

    const spot = JSON.parse(data.text).data.updateSpot;
    expect(spot).toEqual(requestResponse);
  });

  it('should not update spot with bad input', async () => {
    const data = await mutation(mutations.updateSpot, {});
    const spotErrors = JSON.parse(data?.text);
    const error = spotErrors?.errors[0];
    const code = error.extensions.code;
    expect(code).toEqual(codeErrors.BAD_USER_INPUT);
  });

  afterAll(async () => {
    app.close();
  });
});
