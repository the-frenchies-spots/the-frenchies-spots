export type Point = { coordinates: [number, number]; maxDistance: number };

interface FormatPointParams {
  lat: number;
  lng: number;
  m: number;
}

export const formatPoint = (params: FormatPointParams): Point => ({
  coordinates: [params.lng, params.lat],
  maxDistance: params.m,
});
