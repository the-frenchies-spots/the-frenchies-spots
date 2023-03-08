import * as Yup from "yup";
import { DefaultValueType } from "./spot-filter-form";

export const filterFields = {
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
  isFilterDisable: {
    label: "Désactiver ?",
    name: "isFilterDisable",
  },
  orderBy: {
    label: "OrderBy",
    name: "orderBy",
  },
  region: {
    label: "Region",
    name: "region",
  },
};

export const fieldValidation = (defaultValues: DefaultValueType) => {
  const {
    isCanPark = false,
    isCanVisit = false,
    isTouristic = false,
    orderBy = undefined,
    region = undefined,
  } = defaultValues;

  return Yup.object({
    isCanPark: Yup.boolean().default(isCanPark),
    isCanVisit: Yup.boolean().default(isCanVisit),
    isTouristic: Yup.boolean().default(isTouristic),
    isFilterDisable: Yup.boolean().default(true),
    orderBy: Yup.string().default(orderBy),
    region: Yup.string().default(region),
  }).required();
};
