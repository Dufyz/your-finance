import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import Image from "next/image";
import InputMoney from "@/components/global/money-input";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { useState } from "react";

export default function TabCreateCardTransaction() {
    const [date, setDate] = useState<Date>();

    return (
        <TabsContent value="card">
            <Card>
                <CardHeader className="py-4">
                    <Select defaultValue="itau">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a wallet" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="itau" className="py-2">
                                    <div className="flex w-full items-center justify-center gap-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <div>
                                                <Image
                                                    src="/banks/itau.svg"
                                                    alt="Nubank Mastercard"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/flags/mastercard.png"
                                                    alt="Nubank Mastercard"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <span className="text-md">Itaú Mastercard Black</span>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" placeholder="Ex: New shoes" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="category">Category</Label>
                        <Select defaultValue="itau" name="category">
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="itau" className="py-2">
                                        Education
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="value">Value</Label>
                        <InputMoney />
                    </div>
                    <div className="space-y-1">
                        <Popover>
                            <PopoverTrigger asChild className="">
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "mt-2 w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}