import { Product } from "@prisma/client";

export type ProductDto = Pick<Product, "photoUrl" | "gamePoints" | "price">;
export type ByProductDto = Pick<Product, "id">;
