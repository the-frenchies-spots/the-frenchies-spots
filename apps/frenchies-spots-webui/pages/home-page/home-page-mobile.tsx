import React from "react";
import { Button, Container, Typography } from "../../materials";
import { PageLayout } from "../../layout";
import { HomePageProps } from "./home-page";

export const HomePageMobile = (props: HomePageProps) => {
  const {
    onExporeClick,
    firstTitle,
    secondTitle,
    thirdTitle,
    exploreButtonLabel,
  } = props;

  return (
    <PageLayout
      isOpacity={false}
      isAppBar={false}
      direction="column"
      pv={40}
      ph={16}
      justify="space-between"
      isScrollable={false}
    >
      <Container direction="column">
        <Typography variant="h3" color="white">
          {firstTitle}
        </Typography>
        <Typography variant="h3">{secondTitle}</Typography>
        <Typography variant="h3">{thirdTitle}</Typography>
      </Container>
      <Button variant="contained" color="primary" onPress={onExporeClick}>
        {exploreButtonLabel}
      </Button>
    </PageLayout>
  );
};
