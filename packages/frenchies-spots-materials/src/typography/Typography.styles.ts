import { createStyles } from "@mantine/core";
import { fonts } from "../utils";

export const useStyles = createStyles((theme, color?: string | undefined) => ({
  h1: {
    ...fonts["Montserrat-Bold"].style,
    fontSize: 40,
    color: color || theme.colors.darkPurple[0],
  },
}));
