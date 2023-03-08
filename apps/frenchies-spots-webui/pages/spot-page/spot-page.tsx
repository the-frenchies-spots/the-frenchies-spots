import React, { useContext, memo, useMemo } from "react";
import { Image } from "react-native";
import { PageLayout } from "../../layout";
import { ReadOneSpotRequestResult } from "../../types";
import { styles } from "./spot-page-style";
import { BackButton } from "../../components/back-button/back-button";
import { Box, Typography, Container, Button } from "../../materials";
import {
  useTheme,
  useThemeStyles,
  useNavigation,
  useMediaQuery,
} from "../../hooks";
import { Icon } from "../../materials/icon";
import { useQuery, useMutation } from "@apollo/client";
import { READ_SPOT_BY_ID_QUERY, DELETE_SPOT_MUTATION } from "../../graphql";
import {
  DeleteSpotButton,
  EditButton,
  FavoriteButton,
} from "../../components/custom-buttons";
import { DisplayRegion } from "../../components/display-region/display-region";
import { AuthContext } from "../../context";
import SpotRating from "../../components/spot-rating/spot-rating";

interface SpotPageProps {
  route: { params: { id: string } };
}

export const SpotPage = memo(function Spot(props: SpotPageProps) {
  const { route } = props;
  const { id } = route.params;
  // const id = "id3-de-parcnationalpyrenees";

  const { isDesktop } = useMediaQuery();
  const { currentUser } = useContext(AuthContext);
  const [deleteSpot] = useMutation(DELETE_SPOT_MUTATION, { variables: { id } });

  const { data, loading } = useQuery<ReadOneSpotRequestResult>(
    READ_SPOT_BY_ID_QUERY,
    { variables: { id } }
  );

  const userIsCreator: boolean = useMemo(
    () => currentUser?.profileId === data?.spot?.profileId,
    [data, currentUser]
  );

  const { navigateTo } = useNavigation();
  const style = useTheme(styles, isDesktop);
  const theme = useThemeStyles();

  const handleDeleteSpot = () => {
    if (userIsCreator) {
      let text = "Êtes vous sûres de vouloir supprimer ce spot ?";
      if (confirm(text) == true) {
        deleteSpot().then(() => navigateTo("profileSpot"));
      }
    }
  };

  return (
    <PageLayout
      isOpacity={false}
      isBackground={false}
      direction={undefined}
      justify={undefined}
      isScrollable={false}
    >
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Container
          style={{ height: "100%" }}
          direction={isDesktop ? "row" : "column"}
        >
          <Box style={{ ...style.pictureContainer }}>
            <Image
              style={style.image}
              source={{ uri: data?.spot?.spotPicture[0]?.url }}
            />
            <BackButton style={style.backButton} />
          </Box>

          <Container style={style.spotInfoContainer} center>
            <Box style={style.spotContent}>
              <Container pv={20} ph={20}>
                <Container direction="row" justify="space-between">
                  <Typography style={style.title}>
                    {data?.spot?.name}
                  </Typography>
                  <Container direction="row">
                    {currentUser && (
                      <>
                        {data?.spot && (
                          <FavoriteButton
                            style={style.favorite}
                            spot={data.spot}
                          />
                        )}
                        {userIsCreator && (
                          <>
                            <EditButton
                              onClick={() => navigateTo("updateSpot", { id })}
                            />
                            <DeleteSpotButton onClick={handleDeleteSpot} />
                          </>
                        )}
                      </>
                    )}
                  </Container>
                </Container>

                <Typography style={style.adresse}>
                  <Icon name="map-marker" />{" "}
                  {data?.spot?.region && (
                    <DisplayRegion codeRegion={+data?.spot?.region} />
                  )}{" "}
                  <Typography style={style.coordinates}>
                    ({data?.spot?.lat}, {data?.spot?.lng})
                  </Typography>
                </Typography>

                {data?.spot && <SpotRating spot={data.spot} />}

                <Typography style={style.label}>Description</Typography>
                <Typography style={style.description}>
                  {data?.spot?.description}
                </Typography>
              </Container>
              <Container ph={20}>
                <Button
                  style={style.buttonMap}
                  onPress={() =>
                    navigateTo("map", {
                      lat: data?.spot?.lat,
                      lng: data?.spot?.lng,
                    })
                  }
                >
                  <Icon
                    name="map-search"
                    size={18}
                    color={theme?.colors.white}
                  />
                  <Typography
                    color={theme?.colors.white}
                    style={style.labelMapButton}
                  >
                    Voir la carte
                  </Typography>
                </Button>
              </Container>
            </Box>
          </Container>
        </Container>
      )}
    </PageLayout>
  );
});
