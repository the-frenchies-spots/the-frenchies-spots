export type StyleParamType = {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  direction?: "column-reverse" | "column" | "row-reverse" | "row" | undefined;
  align?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline"
    | undefined;
  center?: boolean;
};
