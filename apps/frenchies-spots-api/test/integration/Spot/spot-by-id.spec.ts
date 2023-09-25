import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { SpotRepository } from '../../../src/repository/spot.repository';
import { queries } from '@frenchies-spots/gql';
import { DocumentNode } from 'graphql';
import { AuthRepository } from '../../../src/repository/auth.repository';
import { mockAuthRepository, mockUser } from '../../mocks/mock.auth.repository';
import { mockSpotRepository } from '../../mocks/mock.spot.repository';
import { PublicTokenGuard } from '../../../src/guard/publicToken.guard';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RefreshTokenGuard } from '../../../src/guard/refreshToken.guard';
import { mockGeospatialService } from '../../mocks/mock.geospatial.service';
import { GeospatialService } from '../../../src/service/spot-geospatial.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let query: (query: DocumentNode, variables?: unknown) => request.Test;

  beforeEach(async () => {
    jest.setTimeout(60000);
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

    console.log('=============================================');
    console.log({ spot });
    console.log('=============================================');

    expect(spot).not.toBeNull();
  });

  afterAll(async () => {
    app.close();
  }, 5000);
});
