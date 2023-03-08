import React, { ReactNode, useState } from "react";
import { styles } from "./stepper-style";
import { Box } from "../box";
import { Container } from "../container";
import { Button } from "../button";
import { Stack } from "../stack";

type Props = {
  steps: ReactNode[];
  onSubmit?: () => void | null;
};

export const Stepper = (props: Props) => {
  const { steps, onSubmit = null } = props;

  const [stepId, setStepId] = useState<number>(0);

  const handleOnNext = () => {
    setStepId((current) => current + 1);
  };

  const handleOnBack = () => {
    setStepId((current) => current - 1);
  };

  const handleFinish = () => {
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  return (
    <Container>
      {steps.map((step, index) => {
        if (stepId === index) return <Box>{index}</Box>;
        return null;
      })}

      <Button onPress={handleOnBack}>Previouis</Button>
      <Button onPress={handleOnNext}>Next</Button>
      <Button onPress={handleFinish}>Validation</Button>
    </Container>
  );
};
