import { currencys } from "@/data/currencys";

export default function FormatMoney({
  value,
  currency = "USD",
  className,
  showSignal = false
}: {
  value: number;
  currency?: string;
  className?: string;
  showSignal?: boolean;
}) {
  const currencyCC = currencys.find((c) => c.cc === currency)?.cc;

  return (
    <span className={className}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCC,
        signDisplay: showSignal ? "always" : "never"
      }).format(value)}
    </span>
  );
}
