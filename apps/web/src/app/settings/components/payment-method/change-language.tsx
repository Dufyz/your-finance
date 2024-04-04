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

const ChangeLanguage = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change language</button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
      <DialogHeader />
        <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-start">
            <p className="text-sm">Your current language is: <span className="font-bold text-sm">English</span></p>
        </div>
        <div className="w-full flex items-center space-x-2">
          
          <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="portuguese">Portuguese</SelectItem>
          <SelectItem value="english">English</SelectItem>
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

export default ChangeLanguage



  
