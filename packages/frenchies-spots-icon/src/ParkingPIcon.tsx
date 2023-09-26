import React, { FC } from "react";

interface ParkingPIconProps {
  size?: number;
  color?: string;
}

export const ParkingPIcon: FC<ParkingPIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 52 72"
      fill={color}
    >
      <path d="M28 0H0V72H16V48H28C41.24 48 52 37.24 52 24C52 10.76 41.24 0 28 0ZM28.8 32H16V16H28.8C33.2 16 36.8 19.6 36.8 24C36.8 28.4 33.2 32 28.8 32Z" />
    </svg>
  );
};
