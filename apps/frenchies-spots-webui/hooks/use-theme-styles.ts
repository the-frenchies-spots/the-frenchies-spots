import useTheme from "./use-theme";
import { ThemeType } from "../theme";

type TDefault = Record<string, string>;
type TResult = Record<string, Record<string, string | number>>;

function useThemedStyles<T = TDefault>(
  styles: (theme: ThemeType, params: T) => TResult,
  params: T | TDefault = {}
) {
  const theme = useTheme();
  return styles(theme as ThemeType, params as T);
}

export default useThemedStyles;
