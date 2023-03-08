import React from 'react';
import { Text, TextProps } from '@react-native-material/core';
import { StyleProp, ViewStyle, View } from 'react-native';
import { useTheme } from '@frenchies-spots/theme';
import { styles } from './typography-styles';
import { StyleParamType } from './style-param-type';

interface TypographyProps extends Omit<TextProps, 'style'> {
  style?: Record<string, string | number>;
}
const Typography = (props: TypographyProps) => {
  const { color = 'primary', style = {}, ...other } = props;
  const styleText = useTheme<StyleParamType>(styles, { color });

  return (
    <View style={style}>
      <Text {...other} style={{ ...styleText.text, ...style }} />
    </View>
  );
};

export default Typography;
