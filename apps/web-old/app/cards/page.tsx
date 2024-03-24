import NavbarLayout from "@/layout/RootLayout";
import Card from "./components/card";
import { AddCardDialog } from "./components/add-card-dialog";

export const Cards = () => {
  return (
    <NavbarLayout>
      <div className="w-full flex flex-col h-screen p-[32px] gap-12 overflow-auto">
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl">Credit Cards</h1>
          </div>
          <div>
            <AddCardDialog />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Cards;
