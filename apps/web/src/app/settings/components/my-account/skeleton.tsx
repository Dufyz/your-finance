import { Skeleton } from "@/components/ui/skeleton";

export default function MyAccountSkeleton() {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-16">
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-8 w-28" />
        <div className="flex flex-col items-start justify-center gap-2">
          <Skeleton className="h-2 w-full" />
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-8 w-24" />
          </div>
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-8 w-28" />
        <div className="flex flex-col items-start justify-center gap-2">
          <Skeleton className="h-2 w-full" />
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-8 w-28" />
        <div className="flex flex-col items-start justify-center gap-2">
          <Skeleton className="h-2 w-full" />
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-8 w-24" />
          </div>
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
