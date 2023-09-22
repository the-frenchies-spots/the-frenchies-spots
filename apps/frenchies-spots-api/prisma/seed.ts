import {Prisma, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const tagsDataList: Prisma.TagCreateWithoutSpotsInput[] = [
  {
    id: "641dace3aa8cb5748dea534d",
    name: "montagne",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/240/apple/354/mount-fuji_1f5fb.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dacefaa522e8ce4a447f6",
    name: "océan",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/water-wave_1f30a.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dacf89b0c0cb9c0fcb737",
    name: "forêt",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/leaf-fluttering-in-wind_1f343.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad01b6acd761acf471d5",
    name: "ville",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/cityscape_1f3d9-fe0f.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad0ae575f3177b56447b",
    name: "rivière",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/droplet_1f4a7.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad123334351ea3562d2c",
    name: "mer",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/beach-with-umbrella_1f3d6-fe0f.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad195f6b8d0a81ee3db1",
    name: "eau potable",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/potable-water_1f6b0.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad22c7de24bec65eaca2",
    name: "dormir",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/zzz_1f4a4.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad297c5032d0440f3a00",
    name: "laverie",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/t-shirt_1f455.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad308b90f8cb14c62e90",
    name: "toilettes",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/toilet_1f6bd.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad383aa7777cc5a6aa07",
    name: "douche",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/person-taking-bath_1f6c0.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad3f43b25ce5445ac002",
    name: "gaz",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/dashing-away_1f4a8.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad477d3480f05227d8e3",
    name: "essence",
    tagPictureUrl:
        "https://em-content.zobj.net/thumbs/120/apple/354/fuel-pump_26fd.png",
    category: "RESOURCES_SPOT",
  },
];

const userData: Prisma.UserCreateInput[] = [
  {
    email: "alice@prisma.io",
    hashedPassword: "Alice",
    hashedRefreshToken: "token",
    role: "USER_ADMIN",
    createdAt:"21/09/2023",
    updatedAt:"21/09/2023",
    profile: {
      create: {
        id: "640779bca1e1a3dc3fb33dc5",
        pseudo: "AliceMerveille",
        photoUrl: "url",
        gamePoint: 0,
        spots: {
          create: [
            {
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
            },
          ],
        },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding...`);
  console.log(`Deleting...`);
  await prisma.tag.deleteMany();

  for (const u of userData) {
    await prisma.user.deleteMany();
  }

  console.log(`Everything is deleted...`);

  await prisma.tag.createMany({
    data: tagsDataList,
  });

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
