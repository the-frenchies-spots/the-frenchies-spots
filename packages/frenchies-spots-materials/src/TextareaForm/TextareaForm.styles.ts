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
      ".mantine-Textarea-wrapper, .mantine-Textarea-root, .mantine-Textarea-input":
        {
          ...(error
            ? { borderColor: theme.colors.red[0], color: theme.colors.red[0] }
            : {
                borderColor: filled ? theme.colors.lightBluePurple[0] : "white",
                color: theme.colors.darkPurple[0],
              }),

          borderRadius: 8,
          backgroundColor: filled ? theme.colors.lightBluePurple[0] : "white",
          "&:focus": error
            ? {
                borderColor: theme.colors.red[0],
                backgroundColor: "white",
              }
            : { borderColor: theme.colors.yellow[0], backgroundColor: "white" },
          ...fonts["Montserrat-Regular"].style,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          boxShadow: isShadow ? "0px 4px 8px 0px #DBDBDB" : undefined,
          ...sx,
        },

      ".mantine-Textarea-label": {
        ...fonts["Montserrat-Regular"].style,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        color: theme.colors.darkPurple[0],
      },
    },
  };
});
