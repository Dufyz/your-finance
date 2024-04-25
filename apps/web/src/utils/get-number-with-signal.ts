export const getNumberWithSignal = (value: number): string => {
    return value >= 0 ? `+${value}` : `-${value}`;
}