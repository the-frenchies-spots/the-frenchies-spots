import { UseControllerProps, FieldPath, FieldValues } from "react-hook-form";

export interface FormControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TFieldName> {}
