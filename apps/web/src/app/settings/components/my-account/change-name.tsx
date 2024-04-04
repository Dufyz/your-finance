import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const ChangeName = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-800  hover:bg-gray-900  text-white  text-sm p-2 rounded-md">Change name</button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
      <DialogHeader />
        <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-start">
            <p className="text-sm">Your current name is: <span className="font-bold text-sm">Guilherme Thomaz</span></p>
        </div>
        <div className="w-full flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="" className="text-sm">Enter new name</label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
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

export default ChangeName