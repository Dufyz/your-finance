import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const ChangeName = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change name
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Your current name is:{" "}
              <span className="text-sm font-bold">Guilherme Thomaz</span>
            </p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <label htmlFor="" className="text-sm">
                Enter new name
              </label>
              <Input id="name" type="text" placeholder="Your name" />
            </div>
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

export default ChangeName;
