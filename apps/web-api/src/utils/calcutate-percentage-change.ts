export default function calculatePercentageChange(
  previousMonth: number,
  currentMonth: number,
  currencyCC: string
): number {
  if (previousMonth === 0) throw new Error("Previous month cannot be 0");

  return ((currentMonth - previousMonth) / previousMonth) * 100;
}
