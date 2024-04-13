import { Skeleton } from "@/components/ui/skeleton";

export default function MyAccountSkeleton() {
    return (
        <div className="flex w-full flex-col items-center justify-start gap-16">
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-28 h-8" />
                <div className="flex flex-col items-start justify-center gap-2">
                    <Skeleton className="w-full h-2" />
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="w-40 h-10" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="w-40 h-10" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-28 h-8" />
                <div className="flex flex-col items-start justify-center gap-2">
                    <Skeleton className="w-full h-2" />
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="w-40 h-10" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="w-28 h-8" />
                <div className="flex flex-col items-start justify-center gap-2">
                    <Skeleton className="w-full h-2" />
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="w-40 h-10" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <Skeleton className="w-40 h-10" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
}