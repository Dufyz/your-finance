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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { currencys } from "@/data/currencys"

const ChangeCurrency = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change currency</button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
      <DialogHeader />
        <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-start">
            <p className="text-sm">Your current curreny is: <span className="font-bold text-sm">GBP (£)</span></p>
        </div>
        <div className="w-full flex items-center space-x-2">
          
          <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {currencys.map((currency, index) => (
     <SelectItem key={index} value={currency.abbreviation}>
               {currency.currency}
               <span className="ml-4 font-bold text-sm" dangerouslySetInnerHTML={{
                __html: currency.symbol
               }}/>
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

export default ChangeCurrency



  
