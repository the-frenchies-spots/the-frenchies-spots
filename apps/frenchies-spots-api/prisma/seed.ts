import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const clearDatabase = async () => {
  console.log('--------------------------');
  console.log('Suppression des tables...');
  await prisma.favorite.deleteMany({});
  await prisma.rating.deleteMany({});
  await prisma.spotPicture.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.tagsOnSpots.deleteMany({});
  await prisma.chatMessage.deleteMany({});
  await prisma.contact.deleteMany({});
  await prisma.profileChat.deleteMany({});
  await prisma.chat.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.profile.deleteMany({});
  console.log('--------------------------');
  console.log('Suppression terminée');
};

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'alice@prisma.io',
    hashedPassword: 'Alice',
    hashedRefreshToken: 'token',
    role: 'USER_ADMIN',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33dc5',
        pseudo: 'AliceMerveille',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33dc4',
              name: 'La dune du Pilat',
              description: `La dune du Pilat gardienne du bassin d’Arcachon, mérite son titre de plus haute dune d’Europe. Unique par ses dimensions : 117 m de hauteur, 2,7 km de longueur, 500 m de largeur, son ascension est largement récompensée par la vue que nous réserve le site, il est d’une beauté exceptionnelle. Aux couleurs marines, vert des pins, doré du sable s’ajoute le parfum d’iode et d’odeurs balsamiques.`,
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [43.9359823, -0.9236623],
              },
              region: '75',
              address: 'Av. de Biscarrosse, 33115 La Teste-de-Buch, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674996522/travelerSpot/dune_du_pilat.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 4,
              tags: {
                create: [
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
];

async function main() {
  await clearDatabase();
  console.log(`Start seeding...`);
  console.log(`Deleting...`);
  await prisma.user.deleteMany();

  for (const u of userData) {
    await prisma.user.create({
      data: u,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
