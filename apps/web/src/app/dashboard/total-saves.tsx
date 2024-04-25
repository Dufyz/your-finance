import FormatMoney from "@/utils/format-money";
import { InfoCard } from "./components/InfoCard";
import { getNumberWithSignal } from "@/utils/get-number-with-signal";

export default function TotalSaves({
  total,
  currencyCC,
}: {
  total: {
    value: number;
    percentage: number;
  };
  currencyCC: string | undefined;
}) {
  return (
    <InfoCard.Root>
      <InfoCard.Header>
        <InfoCard.Title>Total Saves</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
      <div>
        <FormatMoney value={total.value} currency={currencyCC} />
      </div>
      <p className="text-xs text-muted-foreground">{getNumberWithSignal(total.percentage)} from last month</p>
      </InfoCard.Content>
    </InfoCard.Root>
  );
}
