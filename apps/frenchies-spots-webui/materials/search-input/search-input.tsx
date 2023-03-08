import React, { useCallback } from 'react';
import { Input, InputProps } from '..';
import { IconButton } from '../icon-button/icon-button';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View
} from 'react-native';
import { debounce } from 'lodash';
import { styles } from './search-input-styles';

export interface SearchInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (value: string) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { style = {}, onChange, ...other } = props;

  const handleChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    if (typeof onChange === 'function') {
      handleDebounceChange(e.nativeEvent.text);
    }
  };

  const handleDebounceChange = useCallback(
    debounce((value: string) => {
      if (typeof onChange === 'function') {
        onChange(value);
      }
    }, 700),
    []
  );

  return (
    <View style={{ ...styles.container, ...(style as Object) }}>
      <Input
        style={styles.input}
        {...other}
        onChange={handleChange}
        placeholder='Rechercher'
      />
      <IconButton name='search' style={styles.iconButton} />
    </View>
  );
};
