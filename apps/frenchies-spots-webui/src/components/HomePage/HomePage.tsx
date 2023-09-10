import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Typography,
} from "@frenchies-spots/material";
import { useRouter } from "next/router";

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
      <Stack mt="xl" pt="xl" sx={{ flexGrow: 1 }}>
        <Typography variant="h1">Entraide</Typography>
        <Typography variant="h1" color="superLightGrey">
          Partage
        </Typography>
        <Typography variant="h1" color="superLightGrey">
          Voyage
        </Typography>
      </Stack>

      <Flex h={100}>
        <Button sx={{ width: "100%" }}>EXPLORE</Button>
      </Flex>
    </Container>
  );
};
