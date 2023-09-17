import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { SpotRepository } from '../src/repository/spot.repository';
import { mutations, queries } from '@frenchies-spots/gql';
import { DocumentNode } from 'graphql';
import { AuthRepository } from '../src/repository/auth.repository';
import { mockAuthRepository, mockUser } from './mocks/mock.auth.repository';
import { mockSpotRepository } from './mocks/mock.spot.repository';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let query: (query: DocumentNode, variables?: unknown) => request.Test;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
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
    await query(queries.spotByPk, {
      id: 'd9b75a45-afa0-4210-8baf-49fadb8f7495',
    }).expect(200);
  });

  afterAll(async () => {
    app.close();
  });
});
