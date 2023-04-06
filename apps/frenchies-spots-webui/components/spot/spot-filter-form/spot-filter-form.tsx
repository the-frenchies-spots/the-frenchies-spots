import {
  Box,
  HStack,
  SecondaryButton,
  SelectCardLittle,
  TextButton,
  Title,
  VStack,
} from "@frenchies-spots/materials";
import React, { useCallback, useEffect, useState } from "react";
import {
  CheckboxController,
  SelectCardLittleController,
  SelectTagController,
} from "../../from-controllers";
import { TCategory } from "../../../types";
import { SpotFilterFormValues, spotField } from "./spot-filter-field";
import { UseFormProps, useForm } from "react-hook-form";
import { TestContext } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScrollView } from "react-native";
import { SelectRegionController } from "../../from-controllers";
import { SelectRegion } from "../../custom-input";

const list = [
  {
    name: "Tout",
    value: undefined,
  },
  {
    name: "Spots Aventure",
    value: "SPARE_TIME_SPOT",
  },
  {
    name: "Spots Ressource",
    value: "RESOURCES_SPOT",
  },
];

interface SpotFilterFormProps {
  onSubmit: (data: SpotFilterFormValues) => void;
  defaultValues: SpotFilterFormValues;
}

export const SpotFilterForm = (props: SpotFilterFormProps) => {
  const { defaultValues, onSubmit } = props;
  const { fields, fieldValidation } = spotField();

  const formParams: UseFormProps<SpotFilterFormValues, TestContext> = {
    mode: "all",
    resolver: yupResolver(fieldValidation),
    defaultValues,
  };

  const hookForm = useForm<SpotFilterFormValues>(formParams);
  const { control, watch, handleSubmit, formState, resetField } = hookForm;
  const { category, region, tags, isCanPark } = watch();

  useEffect(() => {
    resetField("tags");
  }, [category]);

  const onSpotEditionFormSubmit = useCallback(
    async (data: SpotFilterFormValues) => {
      onSubmit(data);
    },
    []
  );

  return (
    <>
      <Box
        style={{
          position: "absolute",
          bottom: 52,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <HStack justify="between" items="center">
          <Box style={{ width: "48%" }}>
            <TextButton variant="default">Réinitialiser</TextButton>
          </Box>
          <Box style={{ width: "48%" }}>
            <SecondaryButton
              little
              onPress={handleSubmit(onSpotEditionFormSubmit)}
            >
              Filtrer
            </SecondaryButton>
          </Box>
        </HStack>
      </Box>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack spacing={20}>
          <Box>
            <Title variant="h2">Types de spot</Title>
          </Box>
          <Box>
            <SelectCardLittleController
              control={control}
              name={fields.category.name}
              list={list}
            />
          </Box>

          {(category === "SPARE_TIME_SPOT" || !category) && (
            <>
              <Title variant="h2">Spots aventure</Title>
              <SelectTagController
                control={control}
                name={fields.tags.name}
                style={{ marginTop: 20 }}
                category={category || "SPARE_TIME_SPOT"}
              />
            </>
          )}

          {(category === "RESOURCES_SPOT" || !category) && (
            <>
              <Title variant="h2">Spots ressources</Title>
              <SelectTagController
                control={control}
                name={fields.tags.name}
                style={{ marginTop: 20 }}
                category={category || "RESOURCES_SPOT"}
              />
            </>
          )}

          <CheckboxController
            control={control}
            name={fields.isCanPark.name}
            label="Est ce que je peux me garer ?"
            style={{ marginTop: 30, marginBottom: 20 }}
          />
        </VStack>
        <Box style={{ paddingBottom: 200 }}>
          <SelectRegionController
            control={control}
            name={fields.region.name}
            enabled={true}
          />
        </Box>
      </ScrollView>
    </>
  );
};
