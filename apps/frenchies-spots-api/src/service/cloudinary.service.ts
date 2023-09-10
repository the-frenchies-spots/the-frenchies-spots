import { Injectable } from '@nestjs/common';
// import { cloudinary } from 'src/utils/cloudinary.config';

import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Injectable()
export class CloudinaryService {
  async uploadImage(files: string[]): Promise<UploadApiResponse[]> {
    const uploadPromises = files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file);
      return result;
    });
    return Promise.all(uploadPromises);
  }

  async deleteImage(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
