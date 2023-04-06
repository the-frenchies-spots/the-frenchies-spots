import React, { useCallback, useState, useContext } from "react";
import { AuthContext } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { authField } from "./auth-page-fields";
import { Page, AuthForm } from "../../components";
import { useTranslation } from "react-i18next";

export type AuthFormValues = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const { processLogin, processSignUp } = useContext(AuthContext);
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const formField = authField(t, isLoginForm);

  const {
    control,
    watch,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<AuthFormValues>({
    mode: "all",
    resolver: yupResolver(formField.fieldValidation),
  });

  const onAuthSubmit = useCallback(
    (data: AuthFormValues) => {
      clearErrors();
      setIsLoading(true);
      const { pseudo, email, password } = data;
      if (isLoginForm) {
        if (typeof processLogin === "function")
          processLogin({ email, password }).then(() => setIsLoading(false));
      } else {
        if (typeof processSignUp === "function")
          processSignUp({ pseudo, email, password }).then(() =>
            setIsLoading(false)
          );
      }
    },
    [isLoginForm]
  );

  return (
    <Page opacity={0.6} isNavBar={false} isPadding={false}>
      <AuthForm
        fields={formField.fields}
        control={control}
        errors={errors}
        watch={watch}
        onSubmitForm={handleSubmit(onAuthSubmit)}
        setIsLoginForm={setIsLoginForm}
      />
    </Page>
  );
};
