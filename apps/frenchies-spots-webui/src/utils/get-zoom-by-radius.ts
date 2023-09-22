export const radiusZoom = {
  1000: 13,
  1500: 12.5,
  2000: 12.5,
  2500: 11.5,
  3000: 11.5,
  3500: 11.5,
  4000: 11.5,
  4500: 11,
  5000: 11,
  7000: 11,
  8000: 10.5,
  9000: 10.2,
  10000: 10,
  12500: 9.8,
  15000: 9.5,
  20000: 9,
  25000: 8.7,
  30000: 8.5,
  35000: 8.2,
  40000: 8,
  45000: 7.8,
  50000: 7.7,
  55000: 7.6,
  60000: 7.5,
  65000: 7.4,
  70000: 7.3,
  75000: 7.2,
  80000: 7.1,
  85000: 6.9,
  90000: 6.8,
  95000: 6.7,
  100000: 6.5,
};

export function getZoomByRadius(inputNumber: number): number {
  const keys = Object.keys(radiusZoom).map(Number);

  keys.sort((a, b) => a - b);

  let closestKey = keys[0];
  let closestValue: number = radiusZoom[keys[0] as keyof typeof radiusZoom];

  for (let i = 1; i < keys.length; i++) {
    const currentKey = keys[i];
    const currentValue = radiusZoom[currentKey as keyof typeof radiusZoom];

    const diffCurrent = Math.abs(inputNumber - currentKey);
    const diffClosest = Math.abs(inputNumber - closestKey);

    if (diffCurrent < diffClosest) {
      closestKey = currentKey;
      closestValue = currentValue;
    }
  }

  return closestValue;
}
