import { InfoCard } from "./components/InfoCard";

export default function TotalSaves() {
  return (
    <InfoCard.Root>
      <InfoCard.Header>
        <InfoCard.Title>Total Saves</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
      <div className="text-2xl font-bold">$1,000</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </InfoCard.Content>
    </InfoCard.Root>
  );
}
