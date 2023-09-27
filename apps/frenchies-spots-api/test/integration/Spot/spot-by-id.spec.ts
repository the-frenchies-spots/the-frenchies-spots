import * as request from 'supertest';
import { DocumentNode } from 'graphql';
import { queries } from '@frenchies-spots/gql';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, INestApplication } from '@nestjs/common';

import { mockSpotRepository } from '../../mocks/repository/mock.spot.repository';
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

// test 2
describe('AppController (e2e)', () => {
  jest.setTimeout(60000);
  let app: INestApplication;
  let query: (query: DocumentNode, variables?: unknown) => request.Test;

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

    query = (query: DocumentNode, variables?: unknown) => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: query.loc && query.loc.source.body,
          variables,
        })
        .set('authorization', `Bearer ${mockUser.refreshToken}`);
    };
  });

  it('should get one spot by id', async () => {
    const spot = await query(queries.spotByPk, {
      id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
    });

    expect(spot).not.toBeNull();
  }, 300000);

  afterAll(async () => {
    app.close();
  }, 300000);
});
