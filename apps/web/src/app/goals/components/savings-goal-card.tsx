import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Separator } from "@/components/ui/separator";
import FormatMoney from "@/utils/format-money";
import { IconMedal, IconTargetArrow } from "@tabler/icons-react";
import EditSavingsGoal from "./edit-savings-goal";
import { Progress } from "@/components/ui/progress";

export default function SavingsGoalCard() {
    return (
        <div className="col-span-2 bg-white shadow-md border w-full rounded-md p-6 flex flex-col items-start justify-start gap-4">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <div className="w-full flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-semibold text-green-700">Savings Goal</h1>
                    </div>
                </div>
                <Separator />
            </div>
            <div className="w-full flex flex-col items-center justify-center flex-1">
                <div className="flex flex-col flex-1 w-full items-center justify-start gap-2">
                    <div className="flex flex-row items-start justify-center gap-14">
                        <div className="flex gap-2 items-start justify-start">
                            <div>
                                <IconMedal size={24} color="#15803d" />
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <div>
                                    <p className="text-lg text-muted-foreground">Target Achived</p>
                                </div>
                                <div>
                                    <FormatMoney value={1000} currency="USD" className="text-xl text-black font-semibold" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-start justify-start">
                            <div>
                                <IconTargetArrow size={24} color="#15803d" />
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <div>
                                    <p className="text-lg text-muted-foreground">Target</p>
                                </div>
                                <div>
                                    <FormatMoney value={2000} currency="USD" className="text-xl text-black font-semibold" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex w-full h-full items-center justify-center">
                        <Progress value={80} />
                    </div>
                </div>
                <div>
                    <EditSavingsGoal />
                </div>
            </div>
        </div>
    )
}