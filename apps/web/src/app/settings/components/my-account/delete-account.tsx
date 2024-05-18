"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import deleteUser from "@/fetchers/user/deleteUser";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteAccount({ user }: { user: User }) {
  const router = useRouter();

  const handleDeleteAccount = async () => {
    try {
      await deleteUser({ id: user.id });
      router.push("/login");
      return toast.success("Account deleted");
    } catch (error) {
      console.error(error);
      return toast.error("An error occurred while deleting the account.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className=" rounded-md  p-2 text-sm text-red-600 underline hover:text-red-700">
          Delete account
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full !flex-col gap-4">
          <AlertDialogAction
            className="ml-0 flex w-full flex-1 sm:!ml-0"
            onClick={async () => await handleDeleteAccount()}
          >
            Continue
          </AlertDialogAction>
          <AlertDialogCancel className="ml-0 flex w-full flex-1 bg-green-700 text-white hover:bg-green-800 hover:text-white sm:!ml-0">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
