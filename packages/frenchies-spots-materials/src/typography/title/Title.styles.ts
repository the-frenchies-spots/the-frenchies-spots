import { createStyles, DEFAULT_THEME as themeO } from "@mantine/core";
import { TypographyVariants } from "../Typography";
import { defaultColor, fonts } from "../../utils";

type StyleParams = {
  variant: keyof typeof TypographyVariants;
  color?: keyof typeof defaultColor;
};

export const useStyles = createStyles((theme, params: StyleParams) => {
  let title = {};

  const customColor = params.color ? defaultColor[params.color] : undefined;

  console.log({ customColor });

  switch (params.variant) {
    case "h1":
      title = {
        ...fonts["Montserrat-Bold"].style,
        fontSize: 40,
        color: customColor || theme.colors.darkPurple[0],
      };
      break;
    case "h2":
      title = {
        ...fonts["Montserrat-Bold"].style,
        fontSize: 18,
        color: params.color,
      };
      break;
    default:
      title = {};
  }

  return { title };
});
