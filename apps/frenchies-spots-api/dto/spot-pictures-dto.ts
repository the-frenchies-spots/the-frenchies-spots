import { SpotPicture } from "@prisma/client";

export type SpotPictureDto = Pick<SpotPicture, "url" | "spotId">;