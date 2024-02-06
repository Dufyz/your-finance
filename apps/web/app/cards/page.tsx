import NavbarLayout from "@/layout/RootLayout";
import Card from "./components/Card";

export const Cards = () => {
  return (
    <NavbarLayout>
      <div className="w-full flex flex-col h-screen p-[32px] gap-12 overflow-auto">
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl">Credit Cards</h1>
          </div>
          <div>
            <button className="px-8 py-2 rounded-md bg-[#099268] hover:bg-[#189872] text-white text-lg">
              Adicionnar
            </button>
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
