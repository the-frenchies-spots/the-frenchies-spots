import { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { TRegion } from "../../types";

const GOUV_API = Axios.create({
  baseURL: "https://geo.api.gouv.fr",
});

export const useRegion = () => {
  const [regions, setRegions] = useState<TRegion[]>([]);

  const getAllRegion = useCallback(() => {
    return GOUV_API.get(`/regions`).then((regions) => {
      const res = regions.data as TRegion[];
      setRegions(res);
      return res;
    });
  }, []);

  const getCodeRegionByCoordinate = async (lat: number, lng: number) => {
    return GOUV_API.get(`/communes?lat=${lat}&lon=${lng}`)
      .then((communes) => communes?.data[0]?.codeRegion)
      .catch(() => alert("Vous devez rester sur le territoire français !"));
  };

  useEffect(() => {
    getAllRegion();
  }, []);

  return {
    regions,
    getAllRegion,
    getCodeRegionByCoordinate,
  };
};
