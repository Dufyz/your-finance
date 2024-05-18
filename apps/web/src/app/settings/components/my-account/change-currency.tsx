"use client";

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
import { useUserStore } from "@/stores/User";
import patchUser from "@/fetchers/user/patchUser";
import { toast } from "sonner";
import { useState } from "react";
import { currencys } from "@/data/currencys";

const ChangeCurrency = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [newCurrency, setNewCurrency] = useState<string>(user.currency);

  const currentCurrency = currencys.find((currency) => currency.cc === user.currency);

  const handleChangeCurrency = async () => {
    try {
      await patchUser({
        user_id: user.id,
        currency: newCurrency
      })

      setUser({
        user: {
          ...user,
          currency: newCurrency
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while changing the currency.");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change currency
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Your current curreny is: {" "}
              <span className="text-sm font-bold">{currentCurrency?.cc} ({currentCurrency?.symbol})</span>
            </p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Select onValueChange={(currency) => setNewCurrency(currency)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencys.map((currency, index) => (
                    <SelectItem key={index} value={currency.cc}>
                      <div className="flex items-center justify-center gap-1">
                        <span>
                          {currency.cc}
                        </span>
                        <span className="text-sm font-bold">
                          {currency.symbol}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="w-full">
            <button
              type="button"
              onClick={handleChangeCurrency}
              className="rounded-md bg-green-700 p-2 text-white"
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeCurrency;
