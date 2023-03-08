import React from "react";
import { HomePageMobile } from "./home-page-mobile";
import { HomePageDesktop } from "./home-page-desktop";
import { useMediaQuery, useNavigation } from "../../hooks";
import { useTranslation } from "react-i18next";

export interface HomePageProps {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  exploreButtonLabel: string;
  onExporeClick: () => void;
}

const HomePage = () => {
  const { isPhone } = useMediaQuery();
  const { t: translate } = useTranslation();
  const { navigateTo } = useNavigation();

  const firstTitle = translate("pages.home.title.first");
  const secondTitle = translate("pages.home.title.second");
  const thirdTitle = translate("pages.home.title.third");
  const exploreButtonLabel = translate("pages.home.exploreButton");

  const handleAuthPress = () => {
    navigateTo("spotExploreur");
  };

  if (isPhone)
    return (
      <HomePageMobile
        firstTitle={firstTitle}
        secondTitle={secondTitle}
        thirdTitle={thirdTitle}
        exploreButtonLabel={exploreButtonLabel}
        onExporeClick={handleAuthPress}
      />
    );
  return (
    <HomePageDesktop
      firstTitle={firstTitle}
      secondTitle={secondTitle}
      thirdTitle={thirdTitle}
      exploreButtonLabel={exploreButtonLabel}
      onExporeClick={handleAuthPress}
    />
  );
};

export default HomePage;
