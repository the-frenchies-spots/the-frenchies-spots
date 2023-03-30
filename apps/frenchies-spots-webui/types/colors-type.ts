export enum ColorEnum {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}

export type ColorType = keyof typeof ColorEnum;
