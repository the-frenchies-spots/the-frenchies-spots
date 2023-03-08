import { Rating } from "@prisma/client";

export type RatingBusinessDto = Pick<Rating, "rate" | "profileId" | "spotId">;
