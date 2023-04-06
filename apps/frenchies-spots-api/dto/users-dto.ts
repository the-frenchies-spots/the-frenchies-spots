import { z } from 'zod';

export const ROLE = ['SIMPLE_USER', 'USER_ADMIN'] as const;

const signInDtoSchema = z.object({
  email: z.string(),
  password: z.string(),
  pseudo: z.string(), 
  role: z.enum(ROLE).default("SIMPLE_USER")
});
export type SignInDto = z.infer<typeof signInDtoSchema>;

const userDtoSchema = z.object({
  email: z.string(),
  password: z.string(),
  pseudo: z.string(),
  role: z.enum(ROLE).default("SIMPLE_USER"),
  photoUrl: z.string()
});
export type UserDto = z.infer<typeof userDtoSchema>;
