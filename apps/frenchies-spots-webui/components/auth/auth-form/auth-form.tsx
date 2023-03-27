import {
  Box,
  CornerBar,
  Swiper,
  SwiperLayout,
  useSwiper,
} from "@frenchies-spots/materials";
import React from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TFields } from "../../../pages/auth-page/auth-page-fields";
import { styles } from "./auth-form-styles";
import { authSwipSection } from "./auth-swip-section";

export type AuthFormValues = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface AuthFormProps {
  fields: TFields;
  control: Control<FieldValues, any> | any;
  errors: FieldErrors<AuthFormValues>;
  watch: UseFormWatch<AuthFormValues>;
  onSubmitForm: () => void;
  setIsLoginForm: (value: boolean) => void;
}

export const AuthForm = (props: AuthFormProps) => {
  const { fields, control, errors, onSubmitForm, setIsLoginForm, watch } =
    props;

  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex } = useSwiper();
  const { t } = useTranslation();

  const sections = authSwipSection({
    goToNextIndex,
    onSubmitForm,
    setIsLoginForm,
    fields,
    control,
    errors,
    watch,
    t,
  });

  return (
    <Box style={styles.container}>
      <Box style={styles.backContainer}>
        <CornerBar color="white" contentStyle={styles.cornerBar} zIndex={0} />
      </Box>
      <Box style={styles.body}>
        <Swiper
          swiperRef={swiperRef}
          disableGesture={true}
          items={sections.map((page) => {
            const { render, prevLabel, nextLabel, onComfirm } = page;
            if (page.layoutDisabled) return <>{render}</>;
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
  );
};
