import * as React from "react"

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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { countries } from "@/data/countries"

const ChangeCountry = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change country</button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
      <DialogHeader />
        <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-start">
            <p className="text-sm">Your current country is: <span className="font-bold text-sm">Brazil</span></p>
        </div>
        <div className="w-full flex items-center space-x-2">
          
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
            <button type="button" className="bg-green-700 p-2 rounded-md text-white">
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ChangeCountry



  
