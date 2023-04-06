import { z } from "zod";
import { CATEGORIES_SPOT_AND_TAG } from "./spot-dto";

export const tagDtoSchema = z.object({
  id: z.string({ invalid_type_error: "id must be a string" }),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  tagPictureUrl: z
    .string({
      invalid_type_error: "tag picture url must be a string",
    })
    .url({ message: "Invalid url" }),
  category: z.enum(CATEGORIES_SPOT_AND_TAG),
});

export type TagDto = z.infer<typeof tagDtoSchema>;

export const tagFilterDtoSchema = z.object({
  ids: z.array(z.string()).optional(),
  category: z.enum(CATEGORIES_SPOT_AND_TAG).optional(),
});

export type TagFilterDto = z.infer<typeof tagFilterDtoSchema>;
export interface ReadTagDto extends TagFilterDto {
  searchValue: string;
}

export const tagUpdateDtoSchema = z.object({
  id: z.string(),
  tagPictureUrl: z
    .string({
      invalid_type_error: "tag picture url must be a string",
    })
    .url({ message: "Invalid url" }),
});

export type TagUpdateDto = z.infer<typeof tagUpdateDtoSchema>;
