import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

interface CornerItemProps {
  color?: string;
  width?: number;
  height?: number;
  style?: Record<string, number | string>;
  size?: number;
}

export const FrenchFlagIcon = (props: CornerItemProps) => {
  const { color = "#A480A6", width = 0, height = 0, size = 25, style } = props;

  return (
    <Svg
      viewBox="0 0 431.96 650"
      width={width === 0 ? size : width}
      height={height === 0 ? size : height}
      style={style}
    >
      <G id="Object">
        <G>
          <G>
            <Path
              fill="#a480a6"
              d="m431.96,215.98c0,119.28-215.98,434.02-215.98,434.02,0,0-215.98-314.74-215.98-434.02S96.7,0,215.98,0s215.98,96.7,215.98,215.98Z"
            />
            <Circle
              fill="#fff"
              cx="215.98"
              cy="206.46"
              r="101.52"
              transform="translate(-82.73 213.19) rotate(-45)"
            />
          </G>
          <Path
            fill="#bc99bf"
            d="m37.02,234.95c0-103.62,84-187.62,187.62-187.62,60.57,0,114.42,28.71,148.73,73.25-32.4-56.24-93.12-94.11-162.69-94.11C107.05,26.47,23.05,110.47,23.05,214.09c0,43.05,14.51,82.71,38.9,114.37-15.86-27.53-24.93-59.46-24.93-93.51Z"
          />
          <Path
            fill="#8e6491"
            d="m165.05,567.39c29.43,49.31,50.93,82.61,50.93,82.61,0,0,215.98-314.74,215.98-434.02,0-6.26-.33-12.45-.85-18.57-8.52,33.14-20.57,65.4-35.37,96.2-40.88,85.1-101.34,139.62-165.73,208.66-20.76,22.25-42.37,44.26-64.97,65.13Z"
          />
        </G>
      </G>
    </Svg>
  );
};
