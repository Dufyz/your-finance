import { CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <CardContent className="flex flex-col items-start justify-start gap-2">
      {children}
    </CardContent>
  );
}
