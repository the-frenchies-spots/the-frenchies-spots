import React, { FormEventHandler, useRef, useState } from "react";

import {
  Box,
  Checkbox,
  Container,
  Flex,
  Font,
  MultipleImagePicker,
  ScrollArea,
  Stack,
  TextInput,
} from "@frenchies-spots/material";
import { useForm } from "@frenchies-spots/hooks";
import { SwiperFrame } from "../../SwiperFrame/SwiperFrame";
import { LocationManager, TLocationData } from "@frenchies-spots/map";
import { tagsDataList } from "@frenchies-spots/utils";
import {
  CategoriesSpotAndTag,
  SpotInput,
  SpotPictureEntity,
  SpotPictureInput,
  TagOnSpotEntity,
} from "@frenchies-spots/gql";
import { SelectTag } from "../../InputCustom";
import { SwiperForm } from "@/components/SwiperForm/SwiperForm";
import { SwiperRef, SwiperSlide } from "swiper/react";
import { useCloudinary } from "../../../hooks/use-cloudinary";
import { useAuth } from "./../../../hooks/use-auth";
import { VSegmentControl } from "../../InputCustom/VSegmentControl";
import SpotDetail from "../../SpotDetail/SpotDetail";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import Stepper from "../../SwiperForm/Stepper/Stepper";
import { useRouter } from "next/router";
import CornerBar from "../../CornerBar/CornerBar";
import { useStyles } from "./SpotEditionForm.styles";

interface SpotEditionFormProps {
  initialValues: SpotInput;
  onSubmit: (values: SpotInput) => void;
  loading?: boolean;
}

export const SpotEditionForm = (props: SpotEditionFormProps) => {
  const { initialValues, onSubmit, loading = false } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const router = useRouter();
  const { classes } = useStyles();
  const { user, profile } = useAuth();
  const swiperRef = useRef<any>(null);
  const { loading: uploadLoading, uploadMultipleImage } = useCloudinary();

  const form = useForm<SpotInput>({
    initialValues,
    validate: {
      tags: (value: SpotInput["tags"]) => value?.length === 0,
      name: (value: SpotInput["name"]) => value?.length === 0,
      description: (value: SpotInput["description"]) => value?.length === 0,
      address: (value: SpotInput["address"]) => value?.length === 0,
      location: (value: SpotInput["location"]) =>
        value?.coordinates.length <= 1,
      region: (value: SpotInput["region"]) => value?.length === 0,
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { pictures, ...spotsParams } = form.values;
    const uploadPictures = (await (pictures
      ? uploadMultipleImage({
          files: pictures,
          folderName: `spots/${user?.profile?.id}`,
        }).then((uploadList) =>
          uploadList.map(({ secure_url, public_id }) => ({
            url: secure_url,
            hostId: public_id,
          }))
        )
      : undefined)) as SpotPictureInput[] | undefined;

    onSubmit({ pictures: uploadPictures, ...spotsParams });
  };

  const handleLocationChange = (newLocation: TLocationData) => {
    const { location, codeRegion } = newLocation;
    form.setValues((current) => ({
      ...current,
      region: codeRegion,
      address: location.value,
      location: {
        type: "Point",
        coordinates: [location.coordinates.lng, location.coordinates.lat],
      },
    }));
  };

  return (
    <>
      <LoadingOverlay visible={loading || uploadLoading} overlayBlur={2} />

      {swiperRef?.current?.swiper && (
        <CornerBar mode="top" className={classes.cornerBar} disableContainer>
          <Stepper
            nb={6}
            initIndex={currentIndex}
            onCancel={() => router.push("/profile")}
            goToIndex={(index: number) =>
              swiperRef.current.swiper.slideTo(index)
            }
            validates={[
              false,
              !form.isValid("tags"),
              !(form.isValid("name") && form.isValid("description")),
              !(
                form.isValid("address") &&
                form.isValid("location") &&
                form.isValid("region")
              ),
              false,
              false,
            ]}
          />
        </CornerBar>
      )}
      <Container size="md">
        <SwiperForm
          onSubmit={handleSubmit}
          ref={swiperRef}
          onChange={setCurrentIndex}
        >
          {/* SPOT CATEGORY */}
          <SwiperSlide>
            <SwiperFrame prevLabel="">
              <Stack mt="md">
                <Font variant="h2">
                  A quelle catégorie associes-tu ton spot ?
                </Font>
                <VSegmentControl
                  list={[
                    {
                      name: "Aventure",
                      description:
                        "spot dans lequel tu y vas pour te faire plaisir, découvrir de nouveaux paysages",
                      value: CategoriesSpotAndTag.SPARE_TIME_SPOT,
                    },
                    {
                      name: "Ressources",
                      description:
                        "spot pour ressencer les lieux utiles pour les tâches quotidiennes comme laver son ligne, jeter ses toilettes chimiques...",
                      value: CategoriesSpotAndTag.RESOURCES_SPOT,
                    },
                  ]}
                  {...form.getInputProps("category")}
                />
              </Stack>
            </SwiperFrame>
          </SwiperSlide>
          {/* SPOT TAG */}
          <SwiperSlide>
            <SwiperFrame disabled={!form.isValid("tags")}>
              <Stack mt="md">
                <Font variant="h2">{`Quels tags correspondent à ton spot ?`}</Font>
                <SelectTag
                  list={tagsDataList.filter(
                    (tag) => tag.category === form.values.category
                  )}
                  {...form.getInputProps("tags")}
                />
              </Stack>
            </SwiperFrame>
          </SwiperSlide>
          {/* SPOT DESCRIPTION */}
          <SwiperSlide>
            <SwiperFrame
              disabled={!(form.isValid("name") && form.isValid("description"))}
            >
              <Stack mt="md">
                <Font variant="h2">Dis nous en plus sur ton spot !</Font>
                <TextInput
                  label="Nom du spot"
                  placeholder=""
                  {...form.getInputProps("name")}
                  error={form.errors.name && "Vous devez renseigner un nom"}
                  required
                />
                <TextInput
                  label="Description"
                  placeholder=""
                  {...form.getInputProps("description")}
                  error={
                    form.errors.name && "Vous devez renseigner une description"
                  }
                  required
                />
                <Checkbox
                  label="Est-ce que je peux me garer ?"
                  checked={form.getInputProps("isCanPark").value}
                  onChange={(event) =>
                    form
                      .getInputProps("isCanPark")
                      .onChange(event.currentTarget.checked)
                  }
                />
                <MultipleImagePicker {...form.getInputProps("pictures")} />
              </Stack>
            </SwiperFrame>
          </SwiperSlide>
          {/* SPOT ADDRESS */}
          <SwiperSlide>
            <SwiperFrame
              disabled={
                !(
                  form.isValid("address") &&
                  form.isValid("location") &&
                  form.isValid("region")
                )
              }
            >
              <Flex h="100%" pt="md" direction="column">
                <Font variant="h2" mb="md">
                  Où se situe ton spot ?
                </Font>
                <Box sx={{ flexGrow: 1 }} mb="xl">
                  <LocationManager
                    value={{
                      location: {
                        value: form.values.address,
                        coordinates: {
                          lat: form.values.location?.coordinates[1],
                          lng: form.values.location?.coordinates[0],
                        },
                      },
                      codeRegion: form.values.region,
                    }}
                    onChange={handleLocationChange}
                  />
                </Box>
              </Flex>
            </SwiperFrame>
          </SwiperSlide>
          {/* PUBLIC || PRIVATE */}
          <SwiperSlide>
            <SwiperFrame nextLabel="Valider">
              <Stack pt="md">
                <Font variant="h2">
                  Dernier effort ! Quel statut préfères-tu pour ton spot ?
                </Font>

                <VSegmentControl
                  list={[
                    {
                      name: "Public",
                      description: "Tout le monde y a accès",
                      value: false,
                    },
                    {
                      name: "Privée",
                      description: "Seulement toi peux le voir",
                      value: true,
                    },
                  ]}
                  {...form.getInputProps("isHidden")}
                />
              </Stack>
            </SwiperFrame>
          </SwiperSlide>
          {/* PREVIEW */}
          <SwiperSlide>
            <SwiperFrame type="submit" nextLabel="Publier">
              <ScrollArea>
                {profile && (
                  <SpotDetail
                    spot={{
                      __typename: "SpotByIdResponse",
                      address: form.values.address,
                      averageRating: 0,
                      category: form.values.category,
                      createdAt: "2023-09-20T12:00:00Z",
                      description: form.values.description,
                      favorites: [],
                      profile,
                      id: "1",
                      isCanPark: form.values.isCanPark,
                      isHidden: form.values.isHidden,
                      location: {},
                      name: form.values.name,
                      profileId: "profile1",
                      region: form.values.region,
                      spotPicture: form.values.pictures?.map(({ url }) => ({
                        url,
                      })) as SpotPictureEntity[],
                      tags:
                        (form.values.tags?.map((tagId) => ({
                          tag: { id: tagId },
                        })) as TagOnSpotEntity[]) || [],
                      updatedAt: "2023-09-20T13:00:00Z",
                    }}
                    isPreviewMode
                  />
                )}
              </ScrollArea>
            </SwiperFrame>
          </SwiperSlide>
        </SwiperForm>
      </Container>
    </>
  );
};
