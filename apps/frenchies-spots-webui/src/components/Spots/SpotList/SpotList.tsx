import React from "react";

import { useRouter } from "next/router";
import { SpotEntity } from "@frenchies-spots/gql";

import SpotCard, { SpotCardProps } from "../SpotCard/SpotCard";
import {
  Container,
  Grid,
  type ContainerProps,
  ScrollArea,
} from "@frenchies-spots/material";

import type { GridProps } from "@frenchies-spots/material";

interface SpotListProps extends Omit<ContainerProps, "children"> {
  list: SpotEntity[] | undefined;
  children?: SpotCardProps["children"];
}

const SpotList = (props: SpotListProps) => {
  const { list, children, ...containerProps } = props;

  const router = useRouter();

  const handleDetailClick = (id: string) => {
    router.push(`/spots/${id}`);
  };

  if (!list) return null;
  return (
    <Container size="md" h="100%" {...containerProps} mb={400}>
      <Grid>
        {list.map((spot) => (
          <Grid.Col key={spot.id} md={4} sm={6} xs={12}>
            <SpotCard spot={spot} onClick={handleDetailClick}>
              {children}
            </SpotCard>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default SpotList;
