export const checkIsNumber = (value: string | number): boolean => {
  const myNumber = parseFloat(`${value}`);
  if (!isNaN(myNumber)) {
    return true;
  }
  return false;
};
