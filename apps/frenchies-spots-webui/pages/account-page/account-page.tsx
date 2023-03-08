import React, { useContext, useState } from "react";
import { PageLayout } from "../../layout";
import { Box, Typography, Container, Button } from "../../materials";
import { Icon } from "../../materials/icon";
import { AuthContext } from "../../context";
import { styles } from "./account-page-styles";
import { useTheme, useMediaQuery, useNavigation } from "../../hooks";
import { TouchableOpacity } from "react-native";

export const AccountPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { navigateTo } = useNavigation();
  const { isPhone } = useMediaQuery();
  const style = useTheme(styles, isPhone);
  const { currentUser, processSignOut } = useContext(AuthContext);

  const handleLogoutClick = () => {
    setIsLoading(true);
    if (typeof processSignOut === "function") {
      processSignOut().then(() => setIsLoading(false));
    }
  };

  return (
    <PageLayout
      h="100%"
      pv={40}
      ph={16}
      isOpacity={true}
      isScrollable={false}
      center
    >
      <Container style={style.mainContainer}>
        <Container center>
          <Box style={style.accountCircle} />
          <Typography style={style.title}>{currentUser?.pseudo}</Typography>
          <Button
            variant="text"
            color="secondary"
            style={style.logoutButton}
            onPress={handleLogoutClick}
            isLoading={isLoading}
          >
            Déconnexion
          </Button>
        </Container>

        <Container
          style={style.firstContainer}
          direction="row"
          justify="space-between"
        >
          <Box style={style.favoriteBlock}>
            <TouchableOpacity onPress={() => navigateTo("favorite")}>
              <Typography style={style.favoriteBlockLabel}>
                Mes favoris
              </Typography>
            </TouchableOpacity>
          </Box>
          <Box style={style.configBlock}>
            <Icon name="settings" style={style.configIcon} />
          </Box>
        </Container>

        <Container
          style={style.secondContainer}
          direction="row"
          justify="space-between"
        >
          <Box style={style.spotBlock}>
            <TouchableOpacity onPress={() => navigateTo("profileSpot")}>
              <Typography style={style.spotBlockLabel}>Mes Spots</Typography>
            </TouchableOpacity>
          </Box>
          <Container style={style.createBlock} justify="space-between">
            <Box style={style.createSpotBlock}>
              <TouchableOpacity onPress={() => navigateTo("createSpot")}>
                <Typography style={style.createSpotBlockLabel}>
                  Créer un spot
                </Typography>
              </TouchableOpacity>
            </Box>

            <Box style={style.createOther}>
              <Typography style={style.createOtherLabel}>
                {currentUser?.gamePoint} <Icon name="coins" color="white" />
              </Typography>
            </Box>
          </Container>
        </Container>
      </Container>
    </PageLayout>
  );
};
