import React from "react";
import { useMediaQuery as useReactResponsive } from "react-responsive";

const mobileSize = 600;
const tabletteSize = 1000;

const useMediaQuery = () => {
  const isPhone: boolean = useReactResponsive({ maxWidth: mobileSize });
  const isTablette: boolean = useReactResponsive({
    minWidth: mobileSize,
    maxWidth: tabletteSize,
  });
  const isDesktop: boolean = useReactResponsive({ minWidth: tabletteSize });

  return { isDesktop, isPhone, isTablette };
};

export default useMediaQuery;
