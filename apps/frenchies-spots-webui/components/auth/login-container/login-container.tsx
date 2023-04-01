import React from "react";
import {
  Box,
  Text,
  VStack,
  PrimaryButton,
  TextButton,
  HStack,
  Title,
} from "@frenchies-spots/materials";
import { Wave } from "./wave";
import { styles } from "./login-container-styles";
import { Image } from "react-native";
import { TextController } from "../../from-controllers";
import { Control, FieldValues } from "react-hook-form";

type TContol = {
  control: Control<FieldValues, any> | any;
  name: string;
  label: string;
};

interface LoginContainerProps {
  login: TContol;
  password: TContol;
  isError: boolean;
  onSubmit: () => void;
  onNext: () => void;
  opacity?: number;
}

export const LoginContainer = (props: LoginContainerProps) => {
  const { login, password, isError, opacity = 0, onSubmit, onNext } = props;

  const style = styles(opacity);

  return (
    <Box style={style.container}>
      <Box style={style.imageContainer}>
        {opacity !== 0 && <Box style={style.opacity} />}
        <Image
          source={require("../../../assets/images/backgroundImg.jpg")}
          style={style.image}
        />
      </Box>

      <VStack style={style.waveContainer} justify="end">
        <Wave width="100%" height={500} />
      </VStack>

      <VStack style={style.waveContainer} justify="end">
        <VStack style={style.inputContainer} spacing={20}>
          <Box>
            <Title variant="h2">Se connecter</Title>
          </Box>

          <TextController
            control={login.control}
            name={login.name}
            label={login.label}
            variant="default"
          />

          <TextController
            control={password.control}
            name={password.name}
            label={password.label}
            variant="default"
            secureTextEntry={true}
          />
          <Box style={style.submitButtonContainer}>
            <PrimaryButton
              contentStyle={style.submitButton}
              onPress={onSubmit}
              disabled={isError}
            >
              Se Connecter
            </PrimaryButton>
          </Box>
        </VStack>
        <HStack>
          <TextButton
            variant="default"
            style={style.createAccountButton}
            onPress={onNext}
          >
            Crée mon compte
          </TextButton>
        </HStack>
      </VStack>
    </Box>
  );
};
