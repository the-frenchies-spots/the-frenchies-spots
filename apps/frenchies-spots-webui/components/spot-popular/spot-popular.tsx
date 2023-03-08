import React from "react";
import { ReadAllSpotRequestResult } from "../../types";
import { READ_SPOT_QUERY } from "../../graphql";
import { useQuery } from "@apollo/client";
import { Box, Typography } from "../../materials";
import { styles } from "./spot-popular-style";
import { useTheme } from "../../hooks";
import { SpotList } from "../spot-list/spot-list";

const SpotPopular = () => {
  const { data, loading } = useQuery<ReadAllSpotRequestResult>(
    READ_SPOT_QUERY,
    { variables: { take: 9, orderBy: "desc" } }
  );

  const style = useTheme(styles);

  if (loading) return <Typography>Loading...</Typography>;
  return (
    <>
      <Typography style={style.title} variant="h5">
        Spots les plus populaires
      </Typography>
      <Box>
        <SpotList data={data?.spots || []} />
      </Box>
    </>
  );
};

export default SpotPopular;
