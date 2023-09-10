import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import type { TUploadImageParams } from "../types";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (
  params: TUploadImageParams
): Promise<UploadApiResponse[]> => {
  const { data, folderName } = params;

  const uploadPromises = [...(Array.isArray(data) ? data : [data])].map(
    async (file) => {
      const result = await cloudinary.uploader.upload(file, {
        folder: folderName,
      });
      return result;
    }
  );
  return Promise.all(uploadPromises);
};

export const deleteImage = async (publicId: string): Promise<void> => {
  await cloudinary.uploader.destroy(publicId);
};
