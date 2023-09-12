import React from "react";

import { useRouter } from "next/router";
import { SpotEntity } from "@frenchies-spots/gql";

import SpotCard, { SpotCardProps } from "../SpotCard/SpotCard";
import { Container, Grid, Group, ScrollArea } from "@frenchies-spots/material";

import type { GridProps } from "@frenchies-spots/material";

interface SpotListProps extends Omit<GridProps, "children"> {
  list: SpotEntity[] | undefined;
  children?: SpotCardProps["children"];
}

const SpotList = (props: SpotListProps) => {
  const { list, children, ...gridProps } = props;

  const router = useRouter();

  const handleDetailClick = (id: string) => {
    router.push(`/spots/${id}`);
  };

  if (!list) return null;
  return (
    <Container size="md" h="100%">
      <ScrollArea h="100%" p={0} m={0}>
        <Grid {...gridProps}>
          {list.map((spot) => (
            <Grid.Col key={spot.id} md={4} sm={6} xs={12}>
              <SpotCard spot={spot} onClick={handleDetailClick}>
                {children}
              </SpotCard>
            </Grid.Col>
          ))}
        </Grid>
      </ScrollArea>
    </Container>
  );
};

export default SpotList;
