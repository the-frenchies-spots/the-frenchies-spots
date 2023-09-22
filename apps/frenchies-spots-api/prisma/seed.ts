import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { tagsDataList } from '@frenchies-spots/utils';
import { coordinatesFaker } from '../src/utils/coordinates.faker';

const prisma = new PrismaClient();

const clearDatabase = async () => {
  console.log('--------------------------');
  console.log('Suppression des tables...');
  await prisma.favorite.deleteMany({});
  await prisma.rating.deleteMany({});
  await prisma.spotPicture.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.tagsOnSpots.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.chatMessage.deleteMany({});
  await prisma.contact.deleteMany({});
  await prisma.profileChat.deleteMany({});
  await prisma.chat.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.profile.deleteMany({});
  console.log('--------------------------');
  console.log('Suppression terminée');
};
const avatarUrls = [
  'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694783898/charac1_xkktq3.png',
  'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694783898/charac2_pkbjkc.png',
];

const fakerUser = (index: number): Prisma.UserCreateInput => {
  const randomCoordinates = coordinatesFaker(44.841088, -0.579116, 60);

  return {
    email: faker.internet.email(),
    hashedPassword: faker.internet.password(),
    profile: {
      create: {
        pseudo: faker.internet.userName(),
        location: randomCoordinates,
        avatarUrl: avatarUrls[index % 2],
      },
    },
  };
};

const createUsers = async (fakerRounds: number) => {
  console.log('--------------------------');
  console.log('Création des users...');
  const users: Prisma.UserCreateInput[] = new Array(fakerRounds)
    .fill(0)
    .map((_, index) => fakerUser(index));

  users.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });
  console.log('--------------------------');
  console.log('Création des users terminée');
};

const createTag = async () => {
  console.log('--------------------------');
  console.log('Création des tags...');
  tagsDataList.forEach(async (tagData) => {
    await prisma.tag.create({ data: tagData as Prisma.TagCreateInput });
  });
  console.log('--------------------------');
  console.log('Création des terminée');
};

async function main() {
  console.log('--------------------------');
  console.log('Début du seed');
  await clearDatabase();

  const fakerRounds = 200;
  /// --------- Users ---------------
  await createUsers(fakerRounds);
  /// --------- Tags ---------------
  await createTag();

  console.log('--------------------------');
  console.log('Fin du seed');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
