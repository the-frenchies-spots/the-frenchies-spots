import axios from 'axios';
import { TRegion } from '@frenchies-spots/types';

const apiURL = 'https://geo.api.gouv.fr';

export const getAllRegion = async () => {
  return axios({
    method: 'get',
    url: apiURL + '/regions'
  })
    .then((regions) => regions.data as TRegion[])
    .catch((error) => {
      console.error('Error: ', error);
      return [];
    });
};

export const getCodeRegionByCoordinate = async (
  lat: number,
  lng: number
) => {
  return axios({
    method: 'get',
    url: `${apiURL}/communes?lat=${lat}&lon=${lng}`
  })
    .then((communes) => +communes.data[0].codeRegion)
    .catch((error) => {
      console.error('Error: ', error);
      return [];
    });
};
