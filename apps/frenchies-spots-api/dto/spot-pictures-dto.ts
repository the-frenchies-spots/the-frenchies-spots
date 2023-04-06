import { z } from "zod";

export const spotPictureDtoSchema = z.object({
  url: z
    .string({ invalid_type_error: "Url must be a string" })
    .url({ message: "Invalid url" }),
  spotId: z.string({
    required_error: "Spot id is required",
    invalid_type_error: "Spot id must be a string",
  }),
});
export type SpotPictureDto = z.infer<typeof spotPictureDtoSchema>;
