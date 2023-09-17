import React, { useState } from "react";

import { UploadApiResponse } from "cloudinary";
import {
  MutationUploadArgs,
  PictureEntity,
  SpotPictureInput,
  mutations,
} from "@frenchies-spots/gql";
import type { TUploadImageParams } from "../types";
import { useMutation } from "@apollo/client";

interface TMultipleUploadImageParams {
  folderName: string;
  files: SpotPictureInput[];
}

export const useCloudinary = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [upload, { loading: uploadLoading }] = useMutation<
    { upload: PictureEntity },
    MutationUploadArgs
  >(mutations.upload);

  const pictureUpload = async (file: string, path: string) => {
    return upload({
      variables: { pictureInput: { files: [file], folder: path } },
    });
  };

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

  const uploadMultiplePicture = async (
    params: TMultipleUploadImageParams
  ): Promise<PictureEntity[]> => {
    setLoading(true);

    const { files, folderName } = params;
    const newPictures = files.filter((item) => item.hostId === undefined);

    const uploadPromises = newPictures.map(async (file) => {
      const result = await pictureUpload(file.url, folderName);
      return result?.data?.upload;
    }) as Promise<PictureEntity>[];

    return Promise.all(uploadPromises).then((response) => {
      setLoading(false);
      return response;
    });
  };

  return { loading, uploadImage, uploadMultipleImage, uploadMultiplePicture };
};
