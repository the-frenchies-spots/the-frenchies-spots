import React from "react";
import Svg, { G, Path } from "react-native-svg";

interface CornerItemProps {
  color?: string;
  width?: number;
  height?: number;
  style?: Record<string, number | string>;
  size?: number;
}

export const FiltersIcon = (props: CornerItemProps) => {
  const { color = "#A480A6", width = 0, height = 0, size = 25, style } = props;

  return (
    <Svg
      width={width === 0 ? size : width}
      height={height === 0 ? size : height}
      viewBox="0 0 79 56"
      fill="none"
      style={style}

      //   preserveAspectRatio="xMidYMid meet"
    >
      <G fill="none" stroke="none">
        <Path
          d="M27.6895 36H0V44H27.6895V56L43.45 40L27.6895 24V36ZM51.3105 32V20H79V12H51.3105V0L35.55 16L51.3105 32Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
