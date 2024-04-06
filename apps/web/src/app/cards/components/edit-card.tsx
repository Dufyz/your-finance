"use client";

import { Button } from "@/components/ui/button"
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
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function EditCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">Edit</Button>
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
