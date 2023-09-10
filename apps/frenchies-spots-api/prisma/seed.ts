import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { tagsDataList } from '@frenchies-spots/utils';

const prisma = new PrismaClient();

const clearDatabase = async () => {
  await prisma.favorite.deleteMany({});
  await prisma.rating.deleteMany({});
  await prisma.spotPicture.deleteMany({});
  await prisma.tagsOnSpots.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});
};

const fakerUser = (): Prisma.UserCreateInput => ({
  email: faker.internet.email(),
  hashedPassword: faker.internet.password(),
  profile: { create: { pseudo: faker.internet.userName() } },
});

async function main() {
  clearDatabase();

  const fakerRounds = 10;
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: fakerUser() });
  }

  tagsDataList.forEach(async (tagData) => {
    await prisma.tag.create({ data: tagData as Prisma.TagCreateInput });
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
