import React from "react";
import Axios from "axios";

const cloudinary = Axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/db00tntyg/image`,
});

export const useCloudinary = () => {
  const uploadImage = async (
    image: string,
    uploadPreset: string = "traveler-spot"
  ) => {
    return new Promise<string>((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", uploadPreset);
      cloudinary
        .post("/upload", formData)
        .then((response) => resolve(response.data.url as string))
        .catch((err) => reject(err));
    });
  };

  const uploadMultipleImage = async (
    images: string[],
    uploadPreset: string = "traveler-spot"
  ): Promise<string[]> => {
    const imagesList = images.filter((image) => image.charAt(0) === "d");
    const result = await Promise.all(
      imagesList.map((image) => {
        return uploadImage(image, uploadPreset);
      })
    );
    return [...result, ...images.filter((image) => image.charAt(0) !== "d")];
  };

  return { uploadImage, uploadMultipleImage };
};
