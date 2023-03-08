import React, { useEffect } from 'react';
import { Box, MapBoxMarker, MapBox } from '../../materials';
import { useTheme, useMediaQuery, useMapBox } from '../../hooks';
import { styles } from './location-picker-style';
import { getCodeRegionByCoordinate } from '../../services';
import { TCoordinate } from '../../types/coordinate-type';

type Props = {
  onLocationChange: (coordinate: TCoordinate, codeRegion: number) => void;
  value: { coordinate: TCoordinate; codeRegion: number } | undefined;
};

export const LocationPicker = (props: Props) => {
  const { value, onLocationChange } = props;

  const { isPhone } = useMediaQuery();
  const style = useTheme(styles, isPhone);

  const { viewport, coordinate, onViewportChange, onCoordinateClick } =
    useMapBox();

  useEffect(() => {
    if (typeof coordinate !== 'undefined') {
      const { lat, lng } = coordinate;
      getCodeRegionByCoordinate(lat, lng).then((codeRegion) => {
        if (typeof codeRegion === 'number')
          onLocationChange(coordinate, codeRegion);
      });
    }
  }, [coordinate]);

  return (
    <Box style={style.container}>
      <MapBox
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
      >
        {value?.coordinate && (
          <MapBoxMarker
            lat={value.coordinate.lat}
            lng={value.coordinate.lng}
          />
        )}
      </MapBox>
    </Box>
  );
};
