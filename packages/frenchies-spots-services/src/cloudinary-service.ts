import Axios from "axios";

const cloudinary = Axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/db00tntyg/image`,
});

const dataType = "file";
const preset = "upload_preset";
const endpoint = "/upload";

export const uploadImage = async (
  image: string,
  uploadPreset: string = "traveler-spot"
) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append(dataType, image);
    formData.append(preset, uploadPreset);
    cloudinary
      .post(endpoint, formData)
      .then((response) => resolve(response.data.url))
      .catch((err) => reject(err));
  });
};
