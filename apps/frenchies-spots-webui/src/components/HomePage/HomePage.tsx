import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Font,
  PrimaryButton,
  Stack,
} from "@frenchies-spots/material";
import { useRouter } from "next/router";
import AppTitle from "./../AppTitle/AppTitle";

export const HomePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/spots");
  };

  return (
    <Container
      size="sm"
      h="100%"
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppTitle mt="xl" pt="xl" sx={{ flexGrow: 1 }} />

      <Flex h={100}>
        <PrimaryButton sx={{ width: "100%" }}>EXPLORE</PrimaryButton>
      </Flex>
    </Container>
  );
};
