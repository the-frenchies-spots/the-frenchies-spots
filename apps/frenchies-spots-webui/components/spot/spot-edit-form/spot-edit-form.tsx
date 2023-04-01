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
import { styles } from "./spot-edit-form-styles";
import { authSwipSection } from "./spot-edit-swip-section";

export type SpotEditFormValues = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface SpotEditFormProps {
  fields: TFields;
  control: Control<FieldValues, any> | any;
  errors: FieldErrors<SpotEditFormValues>;
  watch: UseFormWatch<SpotEditFormValues>;
  onSubmitForm: () => void;
  setIsLoginForm: (value: boolean) => void;
}

export const SpotEditForm = (props: SpotEditFormProps) => {
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
    <Swiper
      swiperRef={swiperRef}
      items={sections.map((page) => {
        const { render, prevLabel, nextLabel, onComfirm } = page;
        return (
          <SwiperLayout
            prevLabel={prevLabel}
            nextLabel={nextLabel}
            swiperIndex={currentIndex}
            lastIndex={sections.length - 1}
            isNextDisable={page?.isNextDisable}
            goToPrevIndex={goToPrevIndex}
            onComfirm={onComfirm}
          >
            {render}
          </SwiperLayout>
        );
      })}
    />
  );
};
