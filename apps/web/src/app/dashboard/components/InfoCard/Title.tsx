import { CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export default function Title({
    children
}: {
    children: ReactNode
}) {
    return (
        <CardTitle className="text-sm font-medium">
            {children}
        </CardTitle>
    )
}