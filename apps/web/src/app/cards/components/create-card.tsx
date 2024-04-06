"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function CreateCard() {
    const [iconColor, setIconColor] = useState("#15803d")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full bg-white shadow-md hover:bg-gray-100 rounded-md border flex items-center justify-center cursor-pointer" onMouseEnter={() => setIconColor("#166534")} onMouseLeave={() => setIconColor("#15803d")}>
            <IconPlus size={64} color={iconColor} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader />
        <div className="space-y-2">
          <div className="space-y-1">
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
          </div>
          <div className="space-y-1">
      <Label htmlFor="nickname">Card nickname</Label>
      <Input id="nickname" placeholder="Ex: Itaú Black Mastercard" />
      </div>
      <div className="pt-2 flex items-center justify-between w-full">
        <Label htmlFor="value">Is main card</Label>
        <Switch />
      </div>
</div>
       
        <DialogFooter>
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
