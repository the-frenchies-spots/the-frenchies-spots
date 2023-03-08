import * as Yup from "yup";
import { ReadOneSpotRequestResult } from "../../types";
import { FormValues } from "./spot-form";

export const spotFields = {
  image: {
    label: "Image",
    name: "image",
  },
  name: {
    label: "Nom",
    name: "name",
    placeholder: "nom..",
    type: "default",
    required: "Veuillez entrez le nom du spot",
  },
  isCanPark: {
    label: "Parking",
    name: "isCanPark",
  },
  isCanVisit: {
    label: "Visitable",
    name: "isCanVisit",
  },
  isTouristic: {
    label: "Touristique",
    name: "isTouristic",
  },
  location: {
    label: "Spot localisation",
    name: "location",
  },
  description: {
    label: "Description",
    name: "description",
    placeholder: "description..",
    type: "default",
    required: "Veuillez entrez une description",
  },
};

const { name, description } = spotFields;

interface TDefaultSpot extends Omit<FormValues, "location"> {
  location: {} | FormValues["location"];
}

export const fieldValidation = (defaultSpot: TDefaultSpot) => {
  return Yup.object({
    image: Yup.string().default(defaultSpot.image),
    name: Yup.string().required(name.required).default(defaultSpot.name),

    isCanPark: Yup.boolean().default(defaultSpot.isCanPark),
    isCanVisit: Yup.boolean().default(defaultSpot.isCanVisit),
    isTouristic: Yup.boolean().default(defaultSpot.isTouristic),

    location: Yup.object().default(defaultSpot.location),

    description: Yup.string()
      .required(description.required)
      .default(defaultSpot.description),
  }).required();
};
