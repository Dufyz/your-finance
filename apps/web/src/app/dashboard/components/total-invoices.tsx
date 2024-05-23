import FormatMoney from "@/utils/format-money";
import { DashBoardCard, InfoCard } from "./InfoCard";
import { getNumberWithSignal } from "@/utils/get-number-with-signal";

export default function TotalInvoices({ total, currencyCC }: DashBoardCard) {
  return (
    <InfoCard.Root>
      <InfoCard.Header>
        <InfoCard.Title>Total Invoices</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <div>
          <FormatMoney value={total.value} currency={currencyCC} />
        </div>
        {typeof total.percentage === "number" && (
          <p className="text-muted-foreground text-xs">
            {getNumberWithSignal(total.percentage)}% from last month
          </p>
        )}
        {typeof total.absolute === "number" && (
          <p className="text-muted-foreground text-xs">
            <FormatMoney
              value={total.absolute}
              currency={currencyCC}
              showSignal
            />{" "}
            absolute from last month
          </p>
        )}
      </InfoCard.Content>
    </InfoCard.Root>
  );
}
