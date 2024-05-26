import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import LeftNavbarLayout from "@/layout/left-navbar-layout";
import { IconPlus } from "@tabler/icons-react";

export default function LoadingGoals() {
  return (
    <LeftNavbarLayout>
      <div className="flex w-full flex-col ">
        <main className="w-ful flex flex-col items-start justify-start gap-8 px-6">
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <div className="item-center flex w-full justify-between gap-6">
              <div>
                <h1 className="text-2xl font-semibold text-green-700">
                  Expenses Goals by category
                </h1>
              </div>
              <div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-12 w-12 gap-1 rounded-full bg-green-700 text-sm hover:bg-green-800"
                >
                  <IconPlus size={32} color="#fff" />
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4">
              <div className="grid w-full grid-cols-4 gap-4">
                <Skeleton className="h-28" />
                <Skeleton className="h-28" />
                <Skeleton className="h-28" />
                <Skeleton className="col-span-4 h-72" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </LeftNavbarLayout>
  );
}
