import React from "react";
import Svg, { G, Path } from "react-native-svg";

interface WaveProps {
  color?: string;
  width?: number | string;
  height?: number;
  style?: Record<string, string | number>;
}

export const Wave = (props: WaveProps) => {
  const { color = "#FFFF", width, height, style } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 684.000000 817.000000"
      style={style}
      preserveAspectRatio="none"
    >
      <G
        transform="translate(0.000000,817.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path
          d="M1200 8164 c-268 -32 -497 -83 -733 -164 -141 -48 -398 -155 -444
-185 l-23 -15 0 -3900 0 -3900 3420 0 3420 0 0 3555 c0 2047 -4 3555 -9 3555
-5 0 -105 -18 -222 -40 -490 -91 -704 -118 -1004 -127 -501 -14 -971 65 -1410
240 -174 69 -430 197 -595 297 -74 46 -193 118 -265 162 -412 252 -898 430
-1380 505 -96 14 -665 27 -755 17z"
        />
      </G>
    </Svg>
  );
};
