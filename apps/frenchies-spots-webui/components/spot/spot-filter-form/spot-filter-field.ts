import * as Yup from "yup";

export type SpotFilterFormValues = {
  category?: "RESOURCES_SPOT" | "SPARE_TIME_SPOT" | undefined;
  tags?: string[];
  isCanPark?: boolean;
  region?: string;
  searchValue?: string;
};

type TField = "category" | "tags" | "isCanPark" | "region";

type SpotField = {
  label?: string | undefined | null;
  name: TField;
  placeholder?: string | undefined | null;
  required?: string | null;
  min?: string | null;
  oneOf?: string | null;
};

export type TFields = Record<TField, SpotField>;

export const spotField = () => {
  const fields: TFields = {
    category: {
      name: "category",
    },
    isCanPark: {
      name: "isCanPark",
      label: "",
    },
    tags: {
      name: "tags",
    },
    region: { name: "region" },
  };

  const fieldValidation = Yup.object({
    category: Yup.string<"RESOURCES_SPOT" | "SPARE_TIME_SPOT">().default(
      undefined
    ),
    tags: Yup.array().default([]),
    isCanPark: Yup.boolean().default(false),
    region: Yup.string().default(undefined),
  }).required();

  return {
    fields,
    fieldValidation,
  };
};
