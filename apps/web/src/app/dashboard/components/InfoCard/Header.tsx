import { CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { IconInfoCircle } from "@tabler/icons-react";
import { DollarSign } from "lucide-react";
import { ReactNode } from "react";

export default function Header({
  children,
  info
}: {
  children: ReactNode;
  info?: string;
}) {
  return (
    <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
      {children}
      <div className="flex items-center justify-center gap-2">
        <DollarSign className="text-muted-foreground h-4 w-4" />
        {info && (
          <Tooltip>
            <TooltipTrigger asChild>
              <IconInfoCircle size={16} className="text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{info}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </CardHeader>
  );
}
