import { KeyboardTypeOptions } from "react-native";
import * as Yup from "yup";

type AuthField = {
  label: string | undefined;
  name: "pseudo" | "email" | "password" | "confirmPassword";
  placeholder: string | undefined;
  type: KeyboardTypeOptions;
  isPassword: boolean;
  required: string;
  email?: string;
  min?: string;
  oneOf?: string;
};

const fieldsParams: Record<string, AuthField> = {
  pseudo: {
    label: "Pseudo",
    name: "pseudo",
    placeholder: "pseudo..",
    type: "default",
    isPassword: false,
    required: "Veuillez saisir votre pseudo",
  },
  email: {
    label: "Email",
    name: "email",
    placeholder: "email@mail.com",
    type: "email-address",
    isPassword: false,
    email: "Veuillez saisir une adresse mail valide",
    required: "Veuillez saisir une adresse mail",
  },
  password: {
    label: "Mot de passe",
    name: "password",
    placeholder: "mot de passe..",
    type: "default",
    isPassword: true,
    required: "Veuillez saisir un mot de passe",
    min: "Veuillez saisir au moins 6 caractères",
  },
  confirmPassword: {
    label: "Comfirmation de mot de passe",
    name: "confirmPassword",
    placeholder: undefined,
    type: "default",
    isPassword: true,
    required: "Veuillez confirmer votre mot de passe",
    oneOf: "Les mots de passe ne correspondent pas",
  },
};

export const authField = (isLoginForm: boolean) => {
  const formFields: Record<string, AuthField> = { ...fieldsParams };
  const { pseudo, email: emailField, password, confirmPassword } = formFields;
  if (isLoginForm) {
    delete formFields.pseudo;
    delete formFields.confirmPassword;
  }

  const fields: AuthField[] = Object.values(formFields);

  const fieldValidationSignUp = Yup.object({
    pseudo: Yup.string().required(pseudo.required),
    email: Yup.string().email(emailField.email).required(pseudo.required),
    password: Yup.string().min(6, password.min).required(password.required),
    confirmPassword: Yup.string()
      .required(confirmPassword.required)
      .oneOf([Yup.ref(password.name)], confirmPassword.oneOf),
  }).required();

  const fieldValidationLogin = Yup.object({
    email: Yup.string().email(emailField.email).required(pseudo.required),
    password: Yup.string().min(6, password.min).required(password.required),
  }).required();

  return {
    fields,
    fieldValidation: isLoginForm ? fieldValidationLogin : fieldValidationSignUp,
  };
};
