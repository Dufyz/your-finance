export default function calculatePercentageChange(
  previousMonth: number,
  currentMonth: number
): number {
  if (previousMonth === 0) {
    throw new Error("Previous month value cannot be zero.");
  }
  return ((currentMonth - previousMonth) / previousMonth) * 100;
}
