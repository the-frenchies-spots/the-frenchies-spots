import { FlatListProps, StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type AutocompleteProps<T> = TextInputProps & {
    containerStyle?: StyleProp<ViewStyle>;
    hideResults?: boolean;
    inputContainerStyle?: StyleProp<ViewStyle>;
    listContainerStyle?: StyleProp<ViewStyle>;
    onShowResults?: (showResults: boolean) => void;
    renderResultList?: (props: FlatListProps<T>) => React.ReactElement;
    renderTextInput?: (props: TextInputProps) => React.ReactElement;
    flatListProps?: Partial<Omit<FlatListProps<T>, 'data'>>;
    data: readonly T[];
  };