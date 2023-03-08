import { StyleSheet } from 'react-native';
import { ThemeType } from '@frenchies-spots/theme';

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    input: {
      color: 'black',
      backgroundColor: theme.colors.primary.background,
      padding: 20,
      borderRadius: 8
    }
  });
};
