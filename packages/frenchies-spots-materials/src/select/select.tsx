import React, { useEffect, useState } from "react";
import {
  SelectBase,
  type SelectBaseProps,
  SelectBaseItem,
  type SelectBaseItemProps,
} from "./select-base";

interface LisValue {
  label: string;
  value: SelectBaseItemProps["value"];
}

interface SelectProps<TValue> extends SelectBaseProps {
  list: LisValue[];
  value?: SelectBaseItemProps["value"];
  defaultValue?: SelectBaseItemProps["value"];
  defaultLabel?: string;
  onChange?: (value: TValue) => void;
}

export function Select<TValue>(props: SelectProps<TValue>) {
  const { list, value, defaultValue, defaultLabel, onChange, ...other } = props;

  const [currentValue, setCurrentValue] =
    useState<SelectBaseItemProps["value"]>(value);

  const handleChange = (val: SelectBaseItemProps["value"], index: number) => {
    if (typeof onChange === "function") {
      onChange(val as TValue);
    }
    setCurrentValue(val);
  };

  useEffect(() => {
    setCurrentValue(value)
  }, [value])


  return (
    <SelectBase
      {...other}
      selectedValue={currentValue}
      onValueChange={handleChange}
    >
      {defaultLabel && defaultValue && (
        <SelectBaseItem label={defaultLabel} value={defaultValue} />
      )}

      {list.map((region, index) => {
        const { label, value } = region;
        return <SelectBaseItem key={index} label={label} value={value} />;
      })}
    </SelectBase>
  );
}
