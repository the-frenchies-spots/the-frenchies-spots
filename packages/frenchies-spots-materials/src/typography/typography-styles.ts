import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';
import { StyleParamType } from './style-param-type';
import { ColorType, ColorEnum } from '@frenchies-spots/types';

export const styles = (theme: ThemeType, params: StyleParamType) => {
  const { color } = params;
  const isColorType = Object.values(ColorEnum).includes(
    color as ColorEnum
  );

  return StyleSheet.create({
    text: {
      color: isColorType ? theme.colors[color as ColorType].main : color
    }
  });
};
