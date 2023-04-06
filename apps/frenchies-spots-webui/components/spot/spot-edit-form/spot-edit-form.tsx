import React, { useCallback, useEffect } from "react";
import {
  CornerBar,
  HStack,
  Icon,
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
import { useCloudinary, useNavigation } from "../../../hooks";
import { CreateSpotRequestParameters, SpotType } from "../../../types";
import { TouchableOpacity } from "react-native";

const defaultValues: SpotEditFormValues = {
  category: "SPARE_TIME_SPOT",
  tags: [],
  name: "",
  description: "",
  isCanPark: true,
  pictures: [],
  location: {
    coordinate: { lat: 47.548576258422315, lng: 4.7177989956386455 },
    codeRegion: 27,
    address: "R 19, 21450 Billy-lès-Chanceaux, France",
  },
  isHidden: true,
};

interface SpotEditFormProps {
  data?: SpotEditFormValues;
  onSubmitForm: (data: CreateSpotRequestParameters) => void;
}

export const SpotEditForm = (props: SpotEditFormProps) => {
  const { onSubmitForm, data = defaultValues } = props;

  const { uploadMultipleImage } = useCloudinary();
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex, goToIndex } =
    useSwiper();
  const { t } = useTranslation();
  const formField = spotField(t);
  const { goBack } = useNavigation();

  const formParams: UseFormProps<SpotEditFormValues, TestContext> = {
    mode: "all",
    resolver: yupResolver(formField.fieldValidation),
    defaultValues: data,
  };

  const hookForm = useForm<SpotEditFormValues>(formParams);
  const { control, watch, handleSubmit, formState, resetField } = hookForm;

  const { category } = watch();

  useEffect(() => {
    resetField("tags");
  }, [category]);

  const onSpotEditionFormSubmit = useCallback(
    async (data: SpotEditFormValues) => {
      const {
        category,
        tags,
        name,
        description,
        isCanPark,
        pictures,
        location,
        isHidden,
      } = data;
      const uploadesImages = await uploadMultipleImage(pictures);
      const result: CreateSpotRequestParameters = {
        category,
        tags: tags.map((tag) => ({ id: tag })),
        name,
        description,
        isCanPark,
        pictures: uploadesImages.map((picture) => ({ url: picture })),
        region: location.codeRegion.toString(),
        lat: location.coordinate.lat,
        lng: location.coordinate.lng,
        address: location.address,
      };
      onSubmitForm(result);
    },
    []
  );

  const sections = spotEditSwipSection({
    fields: formField.fields,
    control,
    errors: formState.errors,
    t,
    watch,
    goToNextIndex,
    onSubmitForm: handleSubmit(onSpotEditionFormSubmit),
  });

  return (
    <>
      <CornerBar mode="top">
        <TouchableOpacity onPress={() => goBack()}>
          <HStack justify="end" style={{ paddingRight: 5 }}>
            <Icon name="cross" size={40} color="white" />
          </HStack>
        </TouchableOpacity>

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
