import React from "react";
import { Button, Stack, Typography, Container } from "../../materials";
import { PageLayout } from "../../layout";
import { desktopStyles } from "./home-page-styles";
import { HomePageProps } from "./home-page";
import { useTheme } from "../../hooks";

export const HomePageDesktop = (props: HomePageProps) => {
  const {
    onExporeClick,
    firstTitle,
    secondTitle,
    thirdTitle,
    exploreButtonLabel,
  } = props;

  const style = useTheme(desktopStyles);

  return (
    <PageLayout
      isOpacity={false}
      isAppBar={false}
      direction="column"
      pv={40}
      ph={16}
      justify="center"
      align="center"
      isScrollable={false}
      style={style.layout}
    >
      <Container direction="column" style={style.stack} align="center">
        <Typography variant="h1" color="white">
          {firstTitle}, {secondTitle}
        </Typography>
        <Typography variant="h1">{thirdTitle}</Typography>
      </Container>
      <Button
        variant="contained"
        color="primary"
        onPress={onExporeClick}
        style={style.button}
      >
        {exploreButtonLabel}
      </Button>
    </PageLayout>
  );
};
