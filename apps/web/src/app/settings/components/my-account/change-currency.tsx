import * as React from "react";

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
import { currencys } from "@/data/currencys";

const ChangeCurrency = () => {
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
              Your current curreny is:{" "}
              <span className="text-sm font-bold">GBP (£)</span>
            </p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencys.map((currency, index) => (
                    <SelectItem key={index} value={currency.abbreviation}>
                      {currency.currency}
                      <span
                        className="ml-4 text-sm font-bold"
                        dangerouslySetInnerHTML={{
                          __html: currency.symbol
                        }}
                      />
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
