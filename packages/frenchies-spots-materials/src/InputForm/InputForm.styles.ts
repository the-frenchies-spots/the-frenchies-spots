import { createStyles, type Sx } from "@mantine/core";
import { fonts } from "../utils";

interface StyleParams {
  error: boolean;
  filled: boolean;
  isShadow: boolean;
  sx?: Sx;
}

export const useStyles = createStyles((theme, props: StyleParams) => {
  const { isShadow, error, filled, sx } = props;
  return {
    input: {
      ".mantine-TextInput-wrapper, .mantine-TextInput-root, .mantine-TextInput-input":
        {
          ...(error
            ? { borderColor: theme.colors.red[0], color: theme.colors.red[0] }
            : {
                borderColor: filled ? theme.colors.lightBluePurple[0] : "white",
                color: theme.colors.darkPurple[0],
              }),
          height: 42,
          borderRadius: 8,
          backgroundColor: filled ? theme.colors.lightBluePurple[0] : "white",
          "&:focus": error
            ? {
                borderColor: theme.colors.red[0],
              }
            : { borderColor: theme.colors.yellow[0] },
          ...fonts["Montserrat-Regular"].style,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          boxShadow: isShadow ? "0px 4px 8px 0px #DBDBDB" : undefined,
          ...sx,
        },

      ".mantine-TextInput-label": {
        ...fonts["Montserrat-Regular"].style,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        color: theme.colors.darkPurple[0],
      },
    },
  };
});
