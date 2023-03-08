import React, { memo } from 'react';
import { Button, Container, Typography } from '../../materials';
import { SwitchController, RadioController } from '../input-controllers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { fieldValidation, filterFields } from './filter-fields';
import { useTheme } from '../../hooks';
import { styles } from './spot-filter-form-style';
import { Divider } from '@react-native-material/core';
import { SelectRegion } from '../select-region/select-region';
import { Controller } from 'react-hook-form';

export type FormValues = {
  isCanPark: boolean | undefined;
  isCanVisit: boolean | undefined;
  isTouristic: boolean | undefined;
  orderBy: 'asc' | 'desc' | undefined;
  region: string | undefined;
};

export type DefaultValueType = {
  isCanPark?: FormValues['isCanPark'];
  isCanVisit?: FormValues['isCanVisit'];
  isTouristic?: FormValues['isTouristic'];
  orderBy?: FormValues['orderBy'];
  region?: FormValues['region'];
  isFilterDisable?: boolean;
};

type SpotFormFilterProps = {
  onChange: (formData: FormValues) => void;
  value: DefaultValueType;
};

export const SpotFormFilter = (props: SpotFormFilterProps) => {
  const { value, onChange } = props;

  const style = useTheme(styles);

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm<FormValues & { isFilterDisable: boolean }>({
    mode: 'onBlur',
    resolver: yupResolver(fieldValidation(value)),
    defaultValues: { ...value, isFilterDisable: true }
  });

  const onCreateSpotSubmit = async (
    data: FormValues & { isFilterDisable: boolean }
  ) => {
    clearErrors();
    const {
      isFilterDisable: disable,
      isCanPark,
      isCanVisit,
      isTouristic,
      ...other
    } = data;
    onChange({
      ...other,
      isCanPark: disable ? undefined : isCanPark,
      isCanVisit: disable ? undefined : isCanVisit,
      isTouristic: disable ? undefined : isTouristic
    });
  };

  return (
    <>
      <Controller
        control={control}
        name='region'
        render={({ field: { onChange, value } }) => {
          return (
            <SelectRegion
              value={value}
              onRegionChange={(codeRegion) => onChange(codeRegion)}
              style={style.select}
            />
          );
        }}
      />

      <Container
        direction='row'
        justify='space-between'
        style={style.options}
      >
        <SwitchController
          control={control}
          name={filterFields.isCanPark.name}
          label={filterFields.isCanPark.label}
        />

        <SwitchController
          control={control}
          name={filterFields.isCanVisit.name}
          label={filterFields.isCanVisit.label}
        />

        <SwitchController
          control={control}
          name={filterFields.isTouristic.name}
          label={filterFields.isTouristic.label}
        />

        <SwitchController
          control={control}
          name={filterFields.isFilterDisable.name}
          label={filterFields.isFilterDisable.label}
        />
      </Container>

      <Typography style={style.title}>Trier</Typography>
      <Divider />

      <Container
        direction='row'
        justify='space-around'
        style={style.orderBy}
      >
        <RadioController
          control={control}
          label='Note croissante'
          name={filterFields.orderBy.name}
          radioValue='asc'
        />
        <RadioController
          control={control}
          label='Note décroissante'
          name={filterFields.orderBy.name}
          radioValue='desc'
        />
      </Container>
      <Button
        onPress={handleSubmit(onCreateSpotSubmit)}
        // style={style.submit}
        // isLoading={isLoading}
      >
        Rechercher
      </Button>
    </>
  );
};
