import { Prisma, Product, Profile } from '@prisma/client';

export type ProductFindManyResult = Prisma.PrismaPromise<Product[]>;

export type CreateProductResult = Prisma.Prisma__ProductClient<
  Product,
  never
>;

export type ProductBuyGamePoint = Prisma.Prisma__ProfileClient<
  Profile,
  never
>;
