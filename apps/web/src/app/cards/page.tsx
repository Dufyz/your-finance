import LeftNavbarLayout from "@/layout/left-navbar-layout";
import CreateCard from "./components/create-card";
import Card from "./components/card";

const list = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
export default function CardsPage() {
  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <CreateCard />
          {list.map((item, index) => (
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 ">
              <Card key={index} />
            </div>
          ))}
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
