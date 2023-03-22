import { z } from 'zod';

const productDtoSchema = z.object({
  photoUrl: z.string().optional(),
  gamePoints: z.number(),
  price: z.number()
});

export type ProductDto = z.infer<typeof productDtoSchema>;

const byProductDtoSchema = z.object({
  id: z.string()
});

export type ByProductDto = z.infer<typeof byProductDtoSchema>;
