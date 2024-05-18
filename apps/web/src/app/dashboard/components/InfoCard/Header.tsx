import { CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
      {children}
      <DollarSign className="text-muted-foreground h-4 w-4" />
    </CardHeader>
  );
}
