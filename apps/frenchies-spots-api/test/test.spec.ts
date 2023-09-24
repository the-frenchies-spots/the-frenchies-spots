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
  let mutation: (mutation: DocumentNode, variables?: unknown) => request.Test;

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

    mutation = (mutation: DocumentNode, variables?: unknown) => {
      return request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: mutation.loc && mutation.loc.source.body,
            variables,
          })
          .set('authorization', `Bearer ${mockUser.refreshToken}`);
    };

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

  it('should get all spot order by desc', async () => {
    await query(queries.spots, {
      orderBy: 'desc',
    }).expect(200);
  });

  it('should get all spot limit 500 order by desc', async () => {
    await query(queries.spots, {
      take: 500,
      skip: 0,
      orderBy: 'asc',
    }).expect(200);
  });

  it('should get all spot by value', async () => {
    await query(queries.spots, {
      searchValue: 'La dune du Pilat',
    }).expect(200);
  });

  it('should create spot', async () => {
    await mutation(mutations.insertSpot, {
      id: "640779bca1e1a3dc3fb33dc4",
      name: "La dune du Pilat",
      description: `La dune du Pilat gardienne du bassin d’Arcachon, mérite son titre de plus haute dune d’Europe. Unique par ses dimensions : 117 m de hauteur, 2,7 km de longueur, 500 m de largeur, son ascension est largement récompensée par la vue que nous réserve le site, il est d’une beauté exceptionnelle. Aux couleurs marines, vert des pins, doré du sable s’ajoute le parfum d’iode et d’odeurs balsamiques.`,
      isCanPark: false,
      isHidden: true,
      category: "SPARE_TIME_SPOT",
      location: null,
      region: "75",
      address: "Av. de Biscarrosse, 33115 La Teste-de-Buch, France",
      spotPicture: {
        create: [
          {
            url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674996522/travelerSpot/dune_du_pilat.png",
            hostId: '',
          },
        ],
      },
      averageRating: 4,
      tags: {
        create: [
          {
            tagId: "641dacefaa522e8ce4a447f6",
          },
          {
            tagId: "641dacf89b0c0cb9c0fcb737",
          },
        ],
      },
    }).expect(200);
  });

  it('should update spot', async () => {
    await mutation(mutations.updateSpot, {
      id: "640779bca1e1a3dc3fb33dc4",
      name: "La dune du Pilat",
    }).expect(200);
  });

  it('should delete spot', async () => {
    await mutation(mutations.deleteSpot, {
      id: "640779bca1e1a3dc3fb33dc4",
    }).expect(200);
  });

  afterAll(async () => {
    app.close();
  });
});
