export default function getDateOnFormatDDMMYY(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${Number(day) <= 10 ? "0" : ""}${day}/${Number(month) <= 10 ? "0" : ""}${month}/${year}`;
}
