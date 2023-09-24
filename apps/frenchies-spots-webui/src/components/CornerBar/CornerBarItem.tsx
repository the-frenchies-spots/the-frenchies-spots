import React from "react";

const cornerMode = {
  bottomRight: "translate(0.000000,180.000000) scale(0.100000,-0.10000)",
  bottomLeft: "translate(180.000000, 180.000000) scale(-0.100000,-0.100000)",
  topLeft: "translate(180.000000, 0.000000) scale(-0.100000,0.100000)",
  topRight: "translate(0.000000, 0.000000) scale(0.100000, 0.100000)",
};

interface CornerItemProps {
  mode?: keyof typeof cornerMode;
  color?: string;
  width?: number;
  height?: number;
}

export const CornerItem = (props: CornerItemProps) => {
  const {
    mode = "bottomLeft",
    color = "#3F3979",
    width = 50,
    height = 50,
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180.000000 180.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={cornerMode[mode]} fill={color} stroke="none">
        <path
          d="M1786 1743 c-22 -190 -88 -416 -175 -598 -107 -225 -222 -387 -395
  -561 -175 -174 -337 -288 -561 -395 -176 -83 -317 -127 -530 -165 l-130 -22
  903 -1 902 -1 0 900 c0 495 -2 900 -4 900 -2 0 -6 -26 -10 -57z"
        />
      </g>
    </svg>
  );
};
