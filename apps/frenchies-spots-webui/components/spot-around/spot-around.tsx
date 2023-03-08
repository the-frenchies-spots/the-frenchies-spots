import React, { useEffect } from "react";
import { ReadAllSpotRequestResult } from "../../types";
import { READ_SPOT_QUERY } from "../../graphql";
import { useLazyQuery } from "@apollo/client";
import { Typography } from "../../materials";
import { styles } from "./spot-around-style";
import { useLocation, useTheme } from "../../hooks";
import { SpotsSwiper } from "../spots-swiper/spots-swiper";

const SpotAround = () => {
  const [getSpotsAround, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const { loadLocation, getCurrentRegion } = useLocation({
    lazy: true,
  });

  const style = useTheme(styles);

  useEffect(() => {
    loadLocation().then((coord) => {
      getCurrentRegion(coord).then((codeRegion) => {
        if (typeof codeRegion === "number") {
          getSpotsAround({
            variables: { region: codeRegion.toString(), orderBy: "desc" },
          });
        }
      });
    });
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  return (
    <>
      <Typography style={style.title} variant="h5">
        {/* Autour de moi */}
        Spot de ma région
      </Typography>
      <SpotsSwiper data={data?.spots || []} />
    </>
  );
};

export default SpotAround;
