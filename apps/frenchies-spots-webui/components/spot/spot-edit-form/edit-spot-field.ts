import * as Yup from "yup";
import { TFunction } from "i18next";

type TField = "pseudo" | "email" | "password" | "confirmPassword";
type SpotField = {
  label: string | undefined | null;
  name: TField;
  placeholder: string | undefined | null;
  required: string | null;
  validEmail?: string | null;
  min?: string | null;
  oneOf?: string | null;
};

export type TFields = Record<TField, SpotField>;

export const spotField = (
  t: TFunction<"translation", undefined, "translation">,
  isLoginForm: boolean
) => {
  const first = "pages.auth.firstSection";
  const second = "pages.auth.secondSection";

  const fields: TFields = {
    pseudo: {
      name: "pseudo",
      label: t(`${first}.fields.pseudo.label`),
      placeholder: t(`${first}.fields.pseudo.placeholder`),
      required: t(`${first}.fields.pseudo.required`),
    },
    email: {
      name: "email",
      label: t(`${first}.fields.email.label`),
      placeholder: t(`${first}.fields.email.placeholder`),
      required: t(`${first}.fields.email.required`),
      validEmail: t(`${first}.fields.email.validEmail`),
    },
    password: {
      name: "password",
      label: t(`${second}.fields.password.label`),
      placeholder: t(`${second}.fields.password.placeholder`),
      required: t(`${second}.fields.password.required`),
      min: t(`${second}.fields.password.min`),
    },
    confirmPassword: {
      name: "confirmPassword",
      label: t(`${second}.fields.confirmPassword.label`),
      placeholder: t(`${second}.fields.confirmPassword.placeholder`),
      required: t(`${second}.fields.confirmPassword.required`),
      oneOf: t(`${second}.fields.confirmPassword.oneOf`),
    },
  };

  const fieldValidationSignUp = Yup.object({
    pseudo: Yup.string<"RESOURCES_SPOT" | "SPARE_TIME_SPOT">().required(
      `${fields?.pseudo?.required}`
    ),
    email: Yup.string()
      .email(`${fields.email.validEmail}`)
      .required(`${fields.email.required}`),
    password: Yup.string()
      .min(6, `${fields.password.min}`)
      .required(`${fields.password.required}`),
    confirmPassword: Yup.string()
      .required(`${fields.confirmPassword.required}`)
      .oneOf(
        [Yup.ref(`${fields.password.name}`)],
        `${fields.confirmPassword.oneOf}`
      ),
  }).required();

  const fieldValidationLogin = Yup.object({
    email: Yup.string()
      .email(`${fields.email.validEmail}`)
      .required(`${fields.email.required}`),
    password: Yup.string()
      .min(6, `${fields.password.min}`)
      .required(`${fields.password.required}`),
  }).required();

  return {
    fields,
    fieldValidation: isLoginForm ? fieldValidationLogin : fieldValidationSignUp,
  };
};
