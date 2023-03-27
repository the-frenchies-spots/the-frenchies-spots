import React, { useCallback, useState, useContext } from "react";

import { AuthContext } from "../../context";
import {
  Box,
  CornerBar,
  Swiper,
  useSwiper,
  SwiperLayout,
} from "@frenchies-spots/materials";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { authField } from "./auth-page-fields";
import { Page } from "../../components";
import { useTranslation } from "react-i18next";
import { sectionList } from "./section-list";
import { styles } from "./auth-page-styles";

export type AuthFormValues = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const AuthPage = () => {
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex } = useSwiper();
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

  const sections = sectionList({
    goToNextIndex,
    onSubmitForm: handleSubmit(onAuthSubmit),
    setIsLoginForm,
    fields: formField.fields,
    control,
    errors,
    watch,
    t,
  });

  return (
    <Page opacity={0.6} isNavBar={false} isPadding={false}>
      <Box style={styles.container}>
        <Box style={styles.backContainer}>
          <CornerBar color="white" contentStyle={styles.cornerBar} zIndex={0} />
        </Box>
        <Box style={styles.body}>
          <Swiper
            swiperRef={swiperRef}
            disableGesture={true}
            items={sections.map((page) => {
              const {
                render,
                prevLabel,
                nextLabel,
                onComfirm,
                layoutDisabled,
              } = page;
              if (layoutDisabled) return <>{render}</>;
              return (
                <SwiperLayout
                  prevLabel={prevLabel}
                  nextLabel={nextLabel}
                  swiperIndex={currentIndex}
                  lastIndex={sections.length - 1}
                  isNextDisable={page?.isNextDisable}
                  isPagination={true}
                  goToPrevIndex={goToPrevIndex}
                  onComfirm={onComfirm}
                >
                  {render}
                </SwiperLayout>
              );
            })}
          />
        </Box>
      </Box>
    </Page>
  );
};
