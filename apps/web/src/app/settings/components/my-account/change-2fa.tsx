import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Change2FA = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Switch />
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        {/* <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex items-center justify-start">
              <p className="text-sm">Your current email is: <span className="font-bold text-sm">guilherme@your-finance.com</span></p>
          </div>
          <div className="w-full flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <label htmlFor="" className="text-sm">Enter your password</label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
              />
            </div>
          </div>
          </div> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="w-full">
            <button
              type="button"
              className="rounded-md bg-green-700 p-2 text-white"
            >
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Change2FA;
