import * as Yup from "yup";
import { TFunction } from "i18next";
import { TCoordinate } from "../../../types";

export type SpotEditFormValues = {
  category: "RESOURCES_SPOT" | "SPARE_TIME_SPOT";
  tags: string[];
  name: string;
  description: string;
  isCanPark: boolean;
  pictures: string[];
  location: { coordinate: TCoordinate; codeRegion: number, placeName: string };
  address: string;
  isHidden: boolean;
};

type TField =
  | "category"
  | "tags"
  | "name"
  | "description"
  | "isCanPark"
  | "pictures"
  | "location"
  | "isHidden"

type SpotField = {
  label?: string | undefined | null;
  name: TField;
  placeholder?: string | undefined | null;
  required?: string | null;
  min?: string | null;
  oneOf?: string | null;
};

export type TFields = Record<TField, SpotField>;
type Translate = TFunction<"translation", undefined, "translation">;

export const spotField = (t: Translate) => {
  const translate = (keyWord: string): string => {
    return t(`components.spotEditForm.${keyWord}`);
  };

  const fields: TFields = {
    category: {
      name: "category",
    },
    tags: {
      name: "tags",
    },
    name: {
      name: "name",
      label: translate("details.name.label"),
      required: translate("details.name.required"),
    },
    description: {
      name: "description",
      label: translate("details.description.label"),
      required: translate("details.description.required"),
    },
    isCanPark: {
      name: "isCanPark",
      label: translate("details.isCanPark.label"),
    },
    pictures: {
      name: "pictures",
      label: translate("details.pictures.label"),
    },
    location: {
      name: "location",
    },
    isHidden: {
      name: "isHidden",
    },
  };

  const fieldValidation = Yup.object({
    name: Yup.string().required("").default(""),
    description: Yup.string().required("").default(""),
    category: Yup.string<"RESOURCES_SPOT" | "SPARE_TIME_SPOT">().default(
      "SPARE_TIME_SPOT"
    ),
    tags: Yup.array().default([]),
    pictures: Yup.array().default([]),

    isCanPark: Yup.boolean().default(false),
    isHidden: Yup.boolean().default(true),

    location: Yup.object().default({}),
  }).required();

  return {
    fields,
    fieldValidation,
  };
};
