import React from "react";
import {
  CornerBar,
  Stepper,
  Swiper,
  SwiperLayout,
  useSwiper,
} from "@frenchies-spots/materials";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormProps, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SpotEditFormValues, spotField } from "./spot-edit-field";
import { spotEditSwipSection } from "./spot-edit-swip-section";
import { TestContext } from "yup";
import { useGeocoding } from "../../../hooks";

const defaultValues: SpotEditFormValues = {
  category: "SPARE_TIME_SPOT",
  tags: ["641dad308b90f8cb14c62e90"],
  name: "MorganeMontaine",
  description: "Une montagne ou il est interdit de boir du thé",
  isCanPark: true,
  pictures: [
    "https://media.routard.com/image/31/2/bretagne-cote-granit-rose.1494312.jpg",
  ],
  location: {
    coordinate: { lat: 48.054906, lng: -2.429937},
    codeRegion: 53,
    address: "2 rue Poudelard" 
  },
  address: "2 rue Poudelard",
  isHidden: true,
};

interface SpotEditFormProps {
  onSubmitForm: (data: SpotEditFormValues) => void;
}

export const SpotEditForm = (props: SpotEditFormProps) => {
  const { onSubmitForm } = props;

  const { searchPlace } = useGeocoding();
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex, goToIndex } =
    useSwiper();
  const { t } = useTranslation();
  const formField = spotField(t);

  const formParams: UseFormProps<SpotEditFormValues, TestContext> = {
    mode: "all",
    resolver: yupResolver(formField.fieldValidation),
    defaultValues: defaultValues,
  };
  const hookForm = useForm<SpotEditFormValues>(formParams);
  const { control, watch, handleSubmit, formState } = hookForm;

  const handleRegionChange = (region: string | undefined) => {
    console.log({ region });
  };

  const sections = spotEditSwipSection({
    fields: formField.fields,
    control,
    errors: formState.errors,
    t,
    watch,
    goToNextIndex,
    onRegionChange: handleRegionChange,
    onSubmitForm: handleSubmit(onSubmitForm),
  });

  return (
    <>
      <CornerBar mode="top">
        <Stepper
          nb={sections.length}
          goToIndex={goToIndex}
          swiperIndex={currentIndex}
        />
      </CornerBar>
      <Swiper
        swiperRef={swiperRef}
        items={sections.map((page) => {
          const { render, prevLabel, nextLabel, isPadding, onComfirm } = page;
          return (
            <SwiperLayout
              prevLabel={prevLabel}
              nextLabel={nextLabel}
              swiperIndex={currentIndex}
              lastIndex={sections.length - 1}
              isNextDisable={page?.isNextDisable}
              goToPrevIndex={goToPrevIndex}
              onComfirm={onComfirm}
              paddingDisabled={isPadding}
            >
              {render}
            </SwiperLayout>
          );
        })}
      />
    </>
  );
};
