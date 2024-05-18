import { currencys } from "@/data/currencys";

export default function FormatMoney({
  value,
  currency = "USD",
  className
}: {
  value: number;
  currency?: string;
  className?: string;
}) {
  const currencyCC = currencys.find((c) => c.cc === currency)?.cc;

  return (
    <span className={className}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCC
      }).format(value)}
    </span>
  );
}
