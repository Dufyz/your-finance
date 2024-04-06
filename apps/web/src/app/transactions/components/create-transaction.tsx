"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { IconPlus } from "@tabler/icons-react"
import Image from "next/image"
import InputMoney from "@/components/global/money-input";
import { useState } from "react";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const CreateTransaction = () => {
  const [date, setDate] = useState<Date>()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
                    size="sm"
                    variant="outline"
                    className="h-12 w-12 rounded-full bg-green-700 hover:bg-green-800 gap-1 text-sm"
                  >
                    <IconPlus size={32} color="#fff"/>
                  </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl w-full">
      <DialogHeader />


    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="wallet">Wallet</TabsTrigger>
        <TabsTrigger value="card">Card</TabsTrigger>
      </TabsList>
      <TabsContent value="wallet">
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
      </TabsContent>

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
                  <div className="w-full flex items-center justify-center gap-4">
                 <div className="flex items-center justify-center gap-2">
                 <div><Image 
                      src="/banks/itau.svg"
                      alt="Nubank Mastercard"
                      width={20}
                      height={20}
                      className="rounded-md"
                    /></div>
                    <div><Image 
                      src="/flags/mastercard.png"
                      alt="Nubank Mastercard"
                      width={20}
                      height={20}
                      className="rounded-md"
                    /></div>
                 </div>
                    <span className="text-md">
                  Itaú Mastercard Black
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
          <Popover>
      <PopoverTrigger asChild className="">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal mt-2",
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

    </Tabs>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="w-full">
            <button type="button" className="bg-green-700 p-2 rounded-md text-white">
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTransaction



  
