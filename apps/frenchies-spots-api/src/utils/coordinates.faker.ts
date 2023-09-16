import { LocationEntity } from 'src/entity/location.entity';

export function coordinatesFaker(
  centerLatitude: number,
  centerLongitude: number,
  maxDistanceInKilometers: number,
): LocationEntity {
  // Générer un angle aléatoire en radians
  const randomAngle = Math.random() * 2 * Math.PI;
  // Générer une distance aléatoire entre 0 et maxDistanceInKilometers
  const randomDistance = Math.random() * maxDistanceInKilometers;

  // Calculer les nouvelles coordonnées en utilisant l'angle et la distance
  const newLatitude =
    centerLatitude +
    (randomDistance / 6371) * (180 / Math.PI) * Math.cos(randomAngle);
  const newLongitude =
    centerLongitude +
    (randomDistance / 6371) * (180 / Math.PI) * Math.sin(randomAngle);

  return {
    type: 'Point',
    coordinates: [newLongitude, newLatitude],
  };
}

// Exemple d'utilisation
// const centerLatitude = 48.8566; => Latitude de Paris, par exemple
// const centerLongitude = 2.3522; => Longitude de Paris, par exemple
// const maxDistanceInKilometers = 30; => Périmètre de 30 km autour de Paris
