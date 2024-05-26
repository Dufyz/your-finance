import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { Skeleton } from "@/components/ui/skeleton";
import { IconPlus } from "@tabler/icons-react";

export default function LoadingWallets() {
  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col">
        <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="flex h-full min-h-44 w-full cursor-pointer items-center justify-center rounded-md border bg-white shadow-md hover:bg-gray-100">
            <IconPlus size={64} color={"#15803d"} />
          </div>
          <Skeleton className="h-full" />
          <Skeleton className="h-full" />
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
