import React from "react";
import { Text, Box, Title } from "@frenchies-spots/materials";

interface PagesListParams {
  onSubmitForm: () => void;
  goToNextIndex: () => void;
}

export const pagesList = (params: PagesListParams) => [
  {
    prevLabel: "Retour",
    nextLabel: "Suivant",
    onComfirm: () => params.goToNextIndex(),
    render: (
      <Box>
        <Title variant="h2">
          h2 - A quelle catégorie associerais-tu ton spot ?
        </Title>
      </Box>
    ),
  },
  {
    prevLabel: "Retour",
    nextLabel: "Valider",
    onComfirm: () => params.goToNextIndex(),
    render: (
      <Box>
        <Text>A quelle catégorie associerais-tu ton spot ? </Text>
      </Box>
    ),
  },
  {
    prevLabel: "Retour",
    nextLabel: "Publier",
    isNextDisable: false,
    onComfirm: () => params.onSubmitForm(),
    render: (
      <Box>
        <Text>Choisi les tags correspondant à ton spot aventure</Text>
      </Box>
    ),
  },
];
