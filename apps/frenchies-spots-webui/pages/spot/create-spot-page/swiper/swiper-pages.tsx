import React from "react";
import {
  Title,
  Text,
  Box,
  SelectCard,
  type TCardItem,
  SelectTag,
} from "@frenchies-spots/materials";

interface PagesListParams {
  onSubmitForm: () => void;
  goToNextIndex: () => void;
}

const spotTypeList: TCardItem[] = [
  {
    name: "Aventure",
    description:
      "spot dans lequel tu y vas pour te faire plaisir, découvrir de nouveaux paysages français",
    value: "SPARE_TIME_SPOT",
  },
  {
    name: "Ressources",
    description:
      "spot pour ressencer les lieux utiles pour les tâches quotidiennes comme laver son ligne, jeter ses toilettes chimiques...",
    value: "RESOURCES_SPOT",
  },
];

const tagsDataList = [
  {
    id: "641dace3aa8cb5748dea534d",
    name: "montagne",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/240/apple/354/mount-fuji_1f5fb.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dacefaa522e8ce4a447f6",
    name: "océan",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/water-wave_1f30a.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dacf89b0c0cb9c0fcb737",
    name: "forêt",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/leaf-fluttering-in-wind_1f343.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad01b6acd761acf471d5",
    name: "ville",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/cityscape_1f3d9-fe0f.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad0ae575f3177b56447b",
    name: "rivière",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/droplet_1f4a7.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad123334351ea3562d2c",
    name: "mer",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/beach-with-umbrella_1f3d6-fe0f.png",
    category: "SPARE_TIME_SPOT",
  },
  {
    id: "641dad195f6b8d0a81ee3db1",
    name: "eau potable",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/potable-water_1f6b0.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad22c7de24bec65eaca2",
    name: "dormir",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/zzz_1f4a4.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad297c5032d0440f3a00",
    name: "laverie",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/t-shirt_1f455.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad308b90f8cb14c62e90",
    name: "toilettes",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/toilet_1f6bd.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad383aa7777cc5a6aa07",
    name: "douche",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/person-taking-bath_1f6c0.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad3f43b25ce5445ac002",
    name: "gaz",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/dashing-away_1f4a8.png",
    category: "RESOURCES_SPOT",
  },
  {
    id: "641dad477d3480f05227d8e3",
    name: "essence",
    tagPictureUrl:
      "https://em-content.zobj.net/thumbs/120/apple/354/fuel-pump_26fd.png",
    category: "RESOURCES_SPOT",
  },
];

export const pagesList = (params: PagesListParams) => [
  {
    prevLabel: "Retour",
    nextLabel: "Suivant",
    onComfirm: () => params.goToNextIndex(),
    render: (
      <Box style={{ marginTop: 100 }}>
        <Title variant="h2" style={{ marginBottom: 20 }}>
          A quelle catégorie associerais-tu ton spot ?{" "}
        </Title>
        <SelectCard list={spotTypeList} />
      </Box>
    ),
  },
  {
    prevLabel: "Retour",
    nextLabel: "Valider",
    onComfirm: () => params.goToNextIndex(),
    render: (
      <Box style={{ marginTop: 100 }}>
        <Title variant="h2" style={{ marginBottom: 20 }}>
          Choisi les tags correspondant à ton spot aventure
        </Title>
        <SelectTag value={[]} list={tagsDataList} />
      </Box>
    ),
  },
  {
    prevLabel: "Retour",
    nextLabel: "Publier",
    isNextDisable: false,
    onComfirm: () => params.onSubmitForm(),
    render: (
      <Box style={{ marginTop: 100 }}>
        <Title variant="h2" style={{ marginBottom: 20 }}>
          A quelle catégorie associerais-tu ton spot ?{" "}
        </Title>
        <SelectCard list={spotTypeList} />
      </Box>
    ),
  },
];
