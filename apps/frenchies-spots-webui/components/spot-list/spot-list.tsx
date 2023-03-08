import React, { ReactNode } from "react";
import { styles } from "./spot-list-style";
import { SpotCard, type SpotCardProps } from "../spot-card/spot-card";
import { Container, type ContainerProps } from "../../materials";
import { AutoGrid } from "../../materials";
import { useMediaQuery } from "../../hooks";
import { ActivityIndicator } from "react-native-paper";
import { SpotType } from "../../types";

interface SpotListProps extends ContainerProps {
  data: SpotType[] | undefined;
  isLoading?: boolean;
}

export const SpotList = (props: SpotListProps) => {
  const { data, isLoading = false, ...other } = props;

  const { isPhone, isTablette } = useMediaQuery();

  if (data === undefined || isLoading) {
    return (
      <Container style={styles.loading} center>
        <ActivityIndicator size="large" color="orange" />
      </Container>
    );
  }

  let column = 3;
  if (isTablette || data.length === 2) column = 2;
  if (isPhone || data.length === 1) column = 1;

  return (
    <Container style={styles.container} {...other}>
      <AutoGrid
        data={data}
        column={column}
        colStyle={styles.col}
        onRender={(spot) => {
          return <SpotCard {...spot} mode="large" style={styles.spotCard} />;
        }}
      />
    </Container>
  );
};
