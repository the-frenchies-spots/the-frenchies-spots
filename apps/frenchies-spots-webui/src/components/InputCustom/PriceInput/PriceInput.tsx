import React, { useRef } from "react";

import {
  ActionIcon,
  Group,
  NumberInput,
  NumberInputHandlers,
  fonts,
} from "@frenchies-spots/material";
import { checkIsNumber } from "../../../utils/check-is-number";
import { IconMinus, IconPlus } from "@frenchies-spots/icon";

interface PriceInputProps {
  price: number;
  onPriceChange: (newPrice: number) => void;
}
const PriceInput = ({ price, onPriceChange }: PriceInputProps) => {
  const handlers = useRef<NumberInputHandlers>();

  const handleValueChange = (newValue: string | number) => {
    if (checkIsNumber(newValue)) {
      if (typeof newValue === "number") {
        onPriceChange(newValue);
      }
    }
  };

  return (
    <Group>
      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers?.current?.decrement()}
        sx={{
          borderRadius: 50,
          backgroundColor: "#A480A6",
          color: "white",
          "&:hover": {
            backgroundColor: "#A480A6",
          },
        }}
      >
        <IconMinus size={20} />
      </ActionIcon>

      <NumberInput
        hideControls
        value={price}
        onChange={(val) => {
          handleValueChange(val);
        }}
        handlersRef={handlers}
        min={0}
        step={1}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `${value} €`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            : " €"
        }
        styles={{
          input: {
            textAlign: "center",
            border: "1px solid #A480A6",
            borderRadius: 8,
            color: "#3F3979",
            ...fonts["Montserrat-Regular"].style,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            boxShadow: "0px 4px 8px 0px #DBDBDB",
          },
        }}
      />

      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers?.current?.increment()}
        sx={{
          borderRadius: 50,
          backgroundColor: "#A480A6",
          color: "white",
          "&:hover": {
            backgroundColor: "#A480A6",
          },
        }}
      >
        <IconPlus size={20} />
      </ActionIcon>
    </Group>
  );
};

export default PriceInput;
