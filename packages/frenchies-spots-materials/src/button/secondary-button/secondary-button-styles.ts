import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { yellow, white } = theme.TFS.colors;

const borderRadius = {
  borderBottomEndRadius: 8,
  borderBottomStartRadius: 8,
  borderTopEndRadius: 8,
  borderTopStartRadius: 8,
};

export const styles = (isSelected: boolean, isDisabled: boolean) => {
  const secondaryTheme =
    !isSelected && !isDisabled
      ? "default"
      : isSelected
      ? "selected"
      : "disabled";

  const { backgroundColor, label, global, textColor } =
    theme.TFS.button.secondary[secondaryTheme];

  return StyleSheet.create({
    text: { color: textColor },
    button: { color: backgroundColor },
    label,
    global: { ...global },
  });
};
