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
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { countries } from "@/data/countries";

const ChangeCountry = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change country
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Your current country is:{" "}
              <span className="text-sm font-bold">Brazil</span>
            </p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
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

export default ChangeCountry;
