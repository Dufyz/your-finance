import { CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { ReactNode } from "react";

export default function Header(
    { children }: {
        children: ReactNode
    }
) {
    return (
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-4">
            {children}
            <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
    )
}