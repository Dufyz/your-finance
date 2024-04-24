import { CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export default function Content({
    children
}: {
    children: ReactNode
}) {
    return (
        <CardContent>
            {children}
      </CardContent>
    )
}