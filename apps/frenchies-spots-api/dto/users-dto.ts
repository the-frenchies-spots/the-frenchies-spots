import { z } from "zod";

export const ROLE = ["SIMPLE_USER", "USER_ADMIN"] as const;

export const signInDtoSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" }),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
  pseudo: z.string({
    required_error: "Pseudo is required",
    invalid_type_error: "Pseudo must be a string",
  }),
  role: z.enum(ROLE).default("SIMPLE_USER"),
});

export type SignInDto = z.infer<typeof signInDtoSchema>;

export const userDtoSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" }),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
  pseudo: z.string({
    required_error: "Pseudo is required",
    invalid_type_error: "Pseudo must be a string",
  }),
  role: z.enum(ROLE).default("SIMPLE_USER"),
  photoUrl: z
    .string({ invalid_type_error: "Url must be a string" })
    .url({ message: "Invalid url" }),
});
export type UserDto = z.infer<typeof userDtoSchema>;
