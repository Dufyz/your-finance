"use client";

import InputMoney from "@/components/global/money-input";
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

export default function EditWallet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader />
        <div className="space-y-2">
          <div className="space-y-1">
          <Label htmlFor="type">Account type</Label>

          <Select defaultValue="current">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              <SelectItem value="current" className="py-2">Current</SelectItem>
              <SelectItem value="savings" className="py-2">Savings</SelectItem>
              <SelectItem value="wallet" className="py-2">Wallet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          <div className="space-y-1">
          <Label htmlFor="bank">Account bank</Label>
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
      <Label htmlFor="nickname">Account nickname</Label>
      <Input id="nickname" placeholder="Ex: Itaú Savings Account" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="value">Initial amount</Label>
      <InputMoney />
      </div>
      <div className="pt-2 flex items-center justify-between w-full">
        <Label htmlFor="value">Is main account</Label>
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
