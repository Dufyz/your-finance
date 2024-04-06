import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const ChangePassword = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md  bg-gray-800  p-2  text-sm text-white hover:bg-gray-900">
          Change password
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader />
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-start">
            <p className="text-sm">
              Use a password at least 15 letters long, or at least 8 characters
              long with both letters and numbers.
            </p>
          </div>
          <div className="flex w-full flex-col  items-start justify-center gap-4 space-x-2">
            <div className="grid w-full flex-1 gap-2">
              <label htmlFor="" className="text-sm">
                Enter your current password
              </label>
              <Input
                id="current-password"
                type="password"
                placeholder="Your password"
              />
            </div>
            <div className="grid w-full flex-1 gap-2">
              <label htmlFor="" className="text-sm">
                Enter your new password
              </label>
              <Input
                id="new-password"
                type="password"
                placeholder="New password"
              />
            </div>
            <div className="grid w-full flex-1 gap-2">
              <label htmlFor="" className="text-sm">
                Confirm your new password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="w-full">
            <button
              type="button"
              className="rounded-md bg-green-700 p-2 text-white"
            >
              Continue
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
