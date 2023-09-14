import React, { useRef } from "react";

import {
  ActionIcon,
  Group,
  NumberInput,
  NumberInputHandlers,
  rem,
} from "@frenchies-spots/material";
import { checkIsNumber } from "../../../utils/check-is-number";

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
    <Group spacing="xl">
      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers?.current?.decrement()}
        sx={{ borderRadius: 50 }}
      >
        –
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
        styles={{ input: { textAlign: "center" } }}
      />

      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers?.current?.increment()}
        sx={{ borderRadius: 50 }}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default PriceInput;
