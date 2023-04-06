import React from "react";
import {
  AutocompleteInput,
  BodyText,
  Box,
  SearchInput,
  TCardItem,
  Title,
} from "@frenchies-spots/materials";
import {
  CheckboxController,
  LocationPickerController,
  MultipleImagePickerController,
  SelectCardController,
  SelectTagController,
  TextController,
} from "../../from-controllers";
import {
  FieldErrors,
  UseFormWatch,
  type Control,
  type FieldValues,
} from "react-hook-form";
import type { SpotEditFormValues, TFields } from "./spot-edit-field";
// import { AuthFormValues } from "./spot-edit-form";
import { TFunction } from "i18next";
import {
  LocationPicker,
  SearchAddress,
  SelectRegion,
} from "../../custom-input";
import { SpotInfoDetail, SpotPictureDetail } from "../spot-detail";
import { SearchAddressController } from "../../from-controllers/searsh-address-controller";

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

const isHiddenMode: TCardItem[] = [
  {
    name: "Public",
    description: "Tout le monde y aura accès",
    value: false,
  },
  {
    name: "Privée",
    description: "Tu peux choisir qui y a accès",
    value: true,
  },
];

interface SectionListParams {
  onSubmitForm: () => void;
  goToNextIndex: () => void;
  control: Control<SpotEditFormValues, any>;
  fields: TFields;
  errors: FieldErrors<SpotEditFormValues>;
  watch: UseFormWatch<SpotEditFormValues>;
  t: TFunction<"translation", undefined, "translation">;
}

export const spotEditSwipSection = (params: SectionListParams) => {
  const { fields, control, errors, watch, t } = params;
  const { name, location, description, pictures } = watch();

  return [
    {
      prevLabel: "",
      nextLabel: "Suivant",
      isNextDisable: false,
      isPadding: true,
      onComfirm: () => params.goToNextIndex(),
      render: (
        <Box style={{ marginTop: 100, height: "100%" }}>
          <Title variant="h2">
            A quelle catégorie associerais-tu ton spot ?{" "}
          </Title>
          <SelectCardController
            control={control}
            name={fields.category.name}
            list={spotTypeList}
            style={{ marginTop: 20 }}
          />
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Suivant",
      onComfirm: () => params.goToNextIndex(),
      isPadding: true,
      render: (
        <Box style={{ marginTop: 100, height: "100%" }}>
          <Title variant="h2">
            Choisi les tags correspondant à ton spot aventure
          </Title>
          <SelectTagController
            control={control}
            name={fields.tags.name}
            style={{ marginTop: 20 }}
            list={tagsDataList}
          />
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Suivant",
      isPadding: true,
      isNextDisable: false,
      onComfirm: () => params.goToNextIndex(),
      render: (
        <Box style={{ marginTop: 100, height: "100%" }}>
          <Title variant="h2" style={{ marginBottom: 20 }}>
            Dis nous en plus sur ton spot !
          </Title>

          <TextController
            control={control}
            name={fields.name.name}
            variant="default"
            label={"Nom du spot*"}
            style={{ marginTop: 30 }}
          />
          <TextController
            control={control}
            name={fields.description.name}
            variant="default"
            label={"Description"}
            style={{ marginTop: 30 }}
            contentStyle={{ height: 105 }}
            multiline
          />

          <CheckboxController
            control={control}
            name={fields.isCanPark.name}
            label="Est ce que je peux me garer ?"
            style={{ marginTop: 30, marginBottom: 20 }}
          />

          <BodyText>Rajoute des images</BodyText>
          <MultipleImagePickerController
            control={control}
            name={fields.pictures.name}
            style={{ marginTop: 30 }}
          />
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Suivant",
      isNextDisable: false,
      isPadding: true,
      onComfirm: () => params.goToNextIndex(),
      render: (
        <Box style={{ marginTop: 100, height: "100%" }}>
          <Title variant="h2" style={{ marginBottom: 20 }}>
            Ou se situe ton spot ?
          </Title>

          <SearchAddressController
            control={control}
            name={fields.location.name}
            variant="outlined"
            placeholder="Rechercher"
            style={{ marginTop: 20 }}
          />

          <LocationPickerController
            control={control}
            name={fields.location.name}
            style={{ height: 400, marginVertical: 20 }}
          />

          <SelectRegion value={location.codeRegion.toString()} />
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Valider",
      isNextDisable: false,
      isPadding: true,
      onComfirm: () => params.goToNextIndex(),
      render: (
        <Box style={{ marginTop: 100, height: "100%" }}>
          <Title variant="h2" style={{ marginBottom: 20 }}>
            Dernier effort ! Quel statut préfères-tu pour ton spot ?
          </Title>
          <SelectCardController
            control={control}
            name={fields.isHidden.name}
            list={isHiddenMode}
            style={{ marginTop: 20 }}
          />
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Publier",
      isNextDisable: false,
      isPadding: false,
      onComfirm: () => params.onSubmitForm(),
      render: (
        <Box style={{ marginTop: 60, height: "100%" }}>
          <SpotPictureDetail
            goBackDisabled={true}
            src={pictures.map((url) => ({ url }))}
          />
          <SpotInfoDetail
            spotId={"df5t7g48rh8dytsy"}
            title={name}
            description={description}
            location={location.address}
            isUserOwner={false}
            actionSectionDisabled={true}
          />
        </Box>
      ),
    },
  ];
};
