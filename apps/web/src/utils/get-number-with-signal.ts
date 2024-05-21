export const getNumberWithSignal = (
  value: number,
  decimalPlaces = 2
): string => {
  const formattedValue = value.toFixed(decimalPlaces);
  return value >= 0 ? `+${formattedValue}` : formattedValue;
};
