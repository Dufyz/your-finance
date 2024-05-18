import FormatMoney from "@/utils/format-money";
import { InfoCard } from "./components/InfoCard";
import { getNumberWithSignal } from "@/utils/get-number-with-signal";

export default function TotalExpenses({
  total,
  currencyCC
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
        <InfoCard.Title>Total Expenses</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <div>
          <FormatMoney value={total.value} currency={currencyCC} />
        </div>
        <p className="text-muted-foreground text-xs">
          {getNumberWithSignal(total.percentage)} from last month
        </p>
      </InfoCard.Content>
    </InfoCard.Root>
  );
}
