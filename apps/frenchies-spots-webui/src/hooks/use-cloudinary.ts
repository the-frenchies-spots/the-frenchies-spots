import React, { useState } from "react";

import { UploadApiResponse } from "cloudinary";
import { SpotPictureInput } from "@frenchies-spots/gql";

import { callNextApi } from "../utils";
import type { TUploadImageParams } from "../types";

interface TMultipleUploadImageParams {
  folderName: string;
  files: SpotPictureInput[];
}

export const useCloudinary = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (params: TUploadImageParams) => {
    const { folderName, data } = params;

    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "upload-spots");
    formData.append(
      "cloud_name",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`
    );
    formData.append("folder", `frenchies-spots/${folderName}`);

    const result: UploadApiResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        body: formData,
      }
    ).then((response) => response?.json());

    return result;
  };

  const uploadMultipleImage = async (
    params: TMultipleUploadImageParams
  ): Promise<UploadApiResponse[]> => {
    setLoading(true);

    const { files, folderName } = params;
    const newPictures = files.filter((item) => item.hostId === undefined);

    const uploadPromises = newPictures.map(async (file) => {
      const result = await uploadImage({ folderName, data: file.url });
      return result;
    });

    return Promise.all(uploadPromises).then((response) => {
      setLoading(false);
      return response;
    });
  };

  return { loading, uploadImage, uploadMultipleImage };
};
