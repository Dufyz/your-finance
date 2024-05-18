import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import FormatMoney from "@/utils/format-money";
import { IconMedal, IconTargetArrow } from "@tabler/icons-react";
import EditSavingsGoal from "./edit-savings-goal";
import { Progress } from "@/components/ui/progress";

export default function SavingsGoalCard() {
  return (
    <div className="col-span-2 flex w-full flex-col items-start justify-start gap-4 rounded-md border bg-white p-6 shadow-md">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-green-700">
              Savings Goal
            </h1>
          </div>
        </div>
        <Separator />
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col items-center justify-start gap-2">
          <div className="flex flex-row items-start justify-center gap-14">
            <div className="flex items-start justify-start gap-2">
              <div>
                <IconMedal size={24} color="#15803d" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div>
                  <p className="text-muted-foreground text-lg">
                    Target Achived
                  </p>
                </div>
                <div>
                  <FormatMoney
                    value={1000}
                    currency="USD"
                    className="text-xl font-semibold text-black"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-2">
              <div>
                <IconTargetArrow size={24} color="#15803d" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div>
                  <p className="text-muted-foreground text-lg">Target</p>
                </div>
                <div>
                  <FormatMoney
                    value={2000}
                    currency="USD"
                    className="text-xl font-semibold text-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-1 items-center justify-center">
            <Progress value={80} />
          </div>
        </div>
        <div>
          <EditSavingsGoal />
        </div>
      </div>
    </div>
  );
}
