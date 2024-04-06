import DialogItem from "@/components/global/dialog-item";
import * as Dialog from "@radix-ui/react-dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"


import InputMoney from "@/components/global/money-input";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function EditTransaction({
  handleDialogItemSelect,
  handleDialogItemOpenChange,
}: {
  handleDialogItemSelect: any;
  handleDialogItemOpenChange: any;
}) {

  const [date, setDate] = useState<Date>()


  return (
    <DialogItem
    triggerChildren="Edit"
    onSelect={handleDialogItemSelect}
    onOpenChange={handleDialogItemOpenChange}
    className="sm:!max-w-4xl !w-full"
  >
    <Dialog.Description className="DialogDescription"/>

   <div className="flex flex-col gap-4">
   <Card>
          <CardHeader className="py-4">
          
          <Select defaultValue="itau">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a wallet" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="itau" className="py-2">
                  <div className="w-full flex items-center justify-center gap-4">
                    <div><Image 
                      src="/banks/itau.svg"
                      alt="Itaú Unibanco"
                      width={20}
                      height={20}
                      className="rounded-md"
                    /></div>
                    <span className="text-md">
                  Itaú Unibanco
                    </span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </CardHeader>
          <CardContent className="space-y-2">
          
                      <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Ex: New Shoes" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="itau" name="category">
            <SelectTrigger className="">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="itau" className="py-2">Education
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
              <div className="w-full flex flex-row gap-2 min-h-10 rounded-md py-2">
              <Button className="flex-1 flex  hover:bg-green-800 bg-muted-foreground">Revenue</Button>
              <Button className="flex-1 flex hover:bg-red-800 bg-muted-foreground">Expense</Button>
              </div>
            </div>
            <div className="space-y-1">
          <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
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
   </div>


   <div className="pt-4">
   <button type="button" className="w-full bg-green-700 p-2 rounded-md text-white">
              Save
            </button>
   </div>
  </DialogItem>
  )
}
