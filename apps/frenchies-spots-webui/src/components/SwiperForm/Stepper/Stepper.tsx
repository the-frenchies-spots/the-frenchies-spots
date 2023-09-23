import React, { ReactNode, useState } from "react";
import { useStyles } from "./Stepper.styles";
import { ActionIcon, Box, Group, Log } from "@frenchies-spots/material";
import StepperButton from "./StepperButton/StepperButton";
import toast from "react-hot-toast";
import { IconAdjustments, IconX } from "@frenchies-spots/icon";

function checkValidate(array: boolean[], index: number): boolean {
  for (let i = 0; i < index; i++) {
    if (array[i]) {
      return false;
    }
  }
  return true;
}

interface StepperProps {
  nb: ReactNode;
  goToIndex: (index: number) => void;
  initIndex?: number;
  validates?: boolean[];
  onCancel?: () => void;
}

const Stepper = (props: StepperProps) => {
  const { nb = 1, goToIndex, initIndex = 0, validates, onCancel } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(initIndex);

  const { classes } = useStyles();

  const handleSlideTo = (index: number) => {
    goToIndex(index);
    setCurrentIndex(index);
  };

  const handleChange = (index: number) => {
    if (validates) {
      if (checkValidate(validates, index)) {
        handleSlideTo(index);
      } else {
        toast.error("Il vous manquent des champs a remplir !");
      }
    } else {
      handleSlideTo(index);
    }
  };

  return (
    <Box h="10vh">
      <Group className={classes.toolBar} position="right">
        <ActionIcon
          mx="md"
          mt="md"
          className={classes.actionIcon}
          onClick={onCancel}
        >
          <IconX color="white" />
        </ActionIcon>
      </Group>
      <Group className={classes.paginationBar} h="50%" grow>
        {[...Array(nb)].map((_, index) => (
          <StepperButton
            key={index}
            onClick={() => handleChange(index)}
            isSelected={index === currentIndex}
          />
        ))}
      </Group>
    </Box>
  );
};

export default Stepper;
