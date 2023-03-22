import React from "react";
import {
  Text,
  Box,
  Title,
  BodyText,
  SubTitle,
  Caption,
} from "@frenchies-spots/materials";

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
        <Title variant="h1">
          h1 - A quelle catégorie associerais-tu ton spot ?
        </Title>
        <Title variant="h2">
          h2 - A quelle catégorie associerais-tu ton spot ?
        </Title>
        <Title variant="h3">
          h3 - A quelle catégorie associerais-tu ton spot ?
        </Title>
        <Title variant="h4">
          h4 - A quelle catégorie associerais-tu ton spot ?
        </Title>
        <Title variant="h5">
          h5 - A quelle catégorie associerais-tu ton spot ?
        </Title>
        <BodyText>body - A quelle catégorie associerais-tu ton spot ?</BodyText>
        <SubTitle variant="sub1">
          sub1 - body - A quelle catégorie associerais-tu ton spot ?
        </SubTitle>
        <SubTitle variant="sub2">
          sub2 - A quelle catégorie associerais-tu ton spot ?
        </SubTitle>
        <Caption>
          Caption - A quelle catégorie associerais-tu ton spot ?
        </Caption>
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
