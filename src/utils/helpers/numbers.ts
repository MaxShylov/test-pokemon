export const getPositiveNumber = (value: string): number | undefined => {
  const num = parseInt(value);
  if (num < 0 || isNaN(num)) return undefined;
  return num;
};
