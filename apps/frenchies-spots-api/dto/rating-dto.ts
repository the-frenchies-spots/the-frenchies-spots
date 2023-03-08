import { Rating } from "@prisma/client";

export type RatingDto = Pick<Rating, "rate" | "profileId" | "spotId">;

export interface UpdateRatingDto extends Pick<Rating, "rate" | "profileId" | "spotId"> {
    ratingId: Rating["id"]
};

export type AverageRatingDto = Pick<Rating, "rate" | "spotId">;
