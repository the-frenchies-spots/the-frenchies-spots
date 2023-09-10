import type { NextApiRequest, NextApiResponse } from "next";

import { TUploadImageParams } from "../../types";
import { uploadImage } from "../../utils/cloudinary";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default async function uploadCloudinaryImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const uploadParam: TUploadImageParams = req.body as TUploadImageParams;
      const response = await uploadImage(uploadParam);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        error: "Une erreur s'est produite",
      });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
