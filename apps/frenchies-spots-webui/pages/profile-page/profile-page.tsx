import React, { useContext, useState } from "react";
import { Page } from "../../components";
import { Image } from "react-native";
import {
  Icon,
  Title,
  SubTitle,
  HStack,
  VStack,
  Box,
  TextButton,
  Avatar,
  PrimaryButton,
  SecondaryButton,
  Text,
  Divider,
  BodyText,
} from "@frenchies-spots/materials";
import { styles } from "./profile-page-styles";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../context";

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, processSignOut } = useContext(AuthContext);

  const handleLogoutClick = () => {
    setIsLoading(true);
    if (typeof processSignOut === "function") {
      processSignOut().then(() => setIsLoading(false));
    }
  };

  return (
    <Page isBackground={false}>
      <HStack justify="between" items="center">
        <Box>
          <SubTitle variant="sub2">Actuellement à</SubTitle>
          <HStack spacing={5} items="center">
            <Icon name="map-marker" color="darkPurple" size={12} />
            <Title variant="h5" color="darkPurple">
              Blanquefort, France
            </Title>
          </HStack>
        </Box>
        <Icon name="bell" color="purple" size={22} />
      </HStack>

      <VStack center spacing={15} style={styles.vstackProfile}>
        <Avatar />
        <Title variant="h3">{currentUser?.pseudo}</Title>
        <TextButton onPress={handleLogoutClick}>Déconnexion</TextButton>
      </VStack>

      <VStack spacing={15}>
        <Box>
          <PrimaryButton contentStyle={styles.buttonContent}>
            <Icon name="map-marker-plus" color="white" />
            <Text style={{ marginLeft: 5 }}> CRÉER UN SPOT </Text>
          </PrimaryButton>
        </Box>
        <HStack justify="between">
          <Box style={{ width: "73%" }}>
            <SecondaryButton contentStyle={styles.buttonContent} little>
              Voir mes spots
            </SecondaryButton>
          </Box>
          <Box style={{ width: "23%" }}>
            <TouchableOpacity style={styles.seetingButton}>
              <Icon name="settings" color="white" size={32} />
            </TouchableOpacity>
          </Box>
        </HStack>
      </VStack>

      <Divider style={styles.divider} />

      <HStack center spacing={50}>
        <Box>
          <Image
            source={{
              uri: "https://res.cloudinary.com/db00tntyg/image/upload/v1679674373/travelerSpot/coy9wnwduwurmxk2ks2l.gif",
            }}
            style={styles.avatarCharacter}
          />
        </Box>
        <VStack spacing={15}>
          <Box>
            <SubTitle variant="sub2">Statut</SubTitle>
            <BodyText>Jeune aventurier</BodyText>
          </Box>

          <Box>
            <SubTitle variant="sub2">Points</SubTitle>
            <BodyText>
              <Icon name="trophy-award" color="darkPurple" /> 1500
            </BodyText>
          </Box>

          <PrimaryButton fontSize={14} little>
            Acheter des points
          </PrimaryButton>
        </VStack>
      </HStack>
    </Page>
  );
};
