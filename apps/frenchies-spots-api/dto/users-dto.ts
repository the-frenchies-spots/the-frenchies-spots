import { User, Profile } from '@prisma/client';
import { z } from 'zod';

const signInDtoSchema = z.object({
  email: z.string(),
  password: z.string(),
  pseudo: z.string()
});
export type SignInDto = z.infer<typeof signInDtoSchema>;

const userDtoSchema = z.object({
  email: z.string(),
  password: z.string(),
  pseudo: z.string(),
  photoUrl: z.string().optional()
});
export type UserDto = z.infer<typeof userDtoSchema>;
