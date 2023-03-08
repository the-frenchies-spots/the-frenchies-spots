import React, { useState, useMemo, useContext, useCallback } from "react";
import { useMediaQuery } from "../../hooks";
import { Button, Typography, Container } from "../../materials";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authField } from "./auth-fields";
import { PageLayout } from "../../layout";
import { InputGroup } from "../../materials/input-group/InputGroup";
import { styles } from "./auth-page-style";
import { AuthContext } from "../../context";

type FormValues = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {};

const AuthPage = (props: Props) => {
  const { processLogin, processSignUp } = useContext(AuthContext);
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  const { isPhone } = useMediaQuery();
  const { fields, fieldValidation } = useMemo(
    () => authField(isLoginForm),
    [isLoginForm]
  );

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(fieldValidation),
  });

  const onAuthSubmit = useCallback(
    (data: FormValues) => {
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
    <PageLayout
      h="100%"
      pv={40}
      ph={16}
      isOpacity={true}
      isScrollable={false}
      center
    >
      <Container style={{ width: isPhone ? "100%" : 600 }}>
        <Typography variant="h6" style={styles.title}>
          {isLoginForm ? "Connexion" : "Création de compte"}
        </Typography>
        {fields.map((field) => {
          const { label, name, placeholder, type, isPassword } = field;
          return (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({
                field: { onChange, value = "", onBlur },
                fieldState: { error },
              }) => (
                <InputGroup
                  label={label}
                  value={value as string}
                  placeholder={placeholder}
                  type={type}
                  onBlur={onBlur}
                  error={!!error}
                  errorDetails={error?.message}
                  onChangeText={onChange}
                  isPassword={isPassword}
                  style={styles.inputGroup}
                />
              )}
            />
          );
        })}

        {errors && Object.keys(errors).length > 0 && (
          <Typography>Veuillez remplir tous les champs obligatoires</Typography>
        )}
        <Button onPress={handleSubmit(onAuthSubmit)} isLoading={isLoading}>
          {isLoginForm ? "Se connecter" : "Créer mon compte"}
        </Button>
        <Typography
          style={styles.authLink}
          onPress={() => setIsLoginForm((current) => !current)}
        >
          {isLoginForm ? "S'inscrire ?" : "Se Connecter"}
        </Typography>
      </Container>
    </PageLayout>
  );
};

export default AuthPage;
