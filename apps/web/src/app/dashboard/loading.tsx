import { Skeleton } from "@/components/ui/skeleton";
import LeftNavbarLayout from "@/layout/left-navbar-layout";

export default function LoadingDashboard() {
  return (
    <LeftNavbarLayout>
      <div className="flex h-full w-full flex-1 flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div>
            <Skeleton className="h-12 w-80" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton className="h-28" key={index} />
            ))}
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Skeleton className="h-64 xl:col-span-4" />
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
