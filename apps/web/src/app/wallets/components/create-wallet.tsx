"use client";

import InputMoney from "@/components/global/money-input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function CreateWallet() {
  const [iconColor, setIconColor] = useState("#15803d");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-md border bg-white shadow-md hover:bg-gray-100"
          onMouseEnter={() => setIconColor("#166534")}
          onMouseLeave={() => setIconColor("#15803d")}
        >
          <IconPlus size={64} color={iconColor} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <div className="space-y-1">
            <div className="flex min-h-10 w-full flex-row gap-2 rounded-md py-2">
              <Button className="flex flex-1 bg-muted-foreground">
                Current
              </Button>
              <Button className="flex flex-1 bg-muted-foreground">
                Savings
              </Button>
              <Button className="flexbg-muted-foreground flex-1">Wallet</Button>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-2">
          <div className="space-y-1">
            <Select defaultValue="itau">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a wallet" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="itau" className="py-2">
                    <div className="flex w-full items-center justify-center gap-4">
                      <div>
                        <Image
                          src="/banks/itau.svg"
                          alt="Itaú Unibanco"
                          width={20}
                          height={20}
                          className="rounded-md"
                        />
                      </div>
                      <span className="text-md">Itaú Unibanco</span>
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
          <div className="flex w-full items-center justify-between pt-2">
            <Label htmlFor="value">Is main account</Label>
            <Switch />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild className="w-full">
            <button
              type="button"
              className="rounded-md bg-green-700 p-2 text-white"
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
