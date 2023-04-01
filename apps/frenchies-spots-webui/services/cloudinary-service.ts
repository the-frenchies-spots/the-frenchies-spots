import Axios from "axios";

const cloudinary = Axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/db00tntyg/image`,
});

export const uploadImage = async (
  image: string,
  uploadPreset: string = "traveler-spot"
) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);
    cloudinary
      .post("/upload", formData)
      .then((response) => resolve(response.data.url))
      .catch((err) => reject(err));
  });
};
