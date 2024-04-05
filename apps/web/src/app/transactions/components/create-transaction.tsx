import * as React from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"

const CreateTransaction = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
                    size="sm"
                    variant="outline"
                    className="h-12 w-12 rounded-full bg-green-700 hover:bg-green-800 gap-1 text-sm"
                  >
                    <IconPlus size={32} color="#fff"/>
                  </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
      <DialogHeader />
     
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

export default CreateTransaction



  
