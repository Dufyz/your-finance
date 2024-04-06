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

const DeleteAccount = () => {
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
            This action will delete your account. This action can be undone
            within 30 days.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full !flex-col gap-4">
          <AlertDialogCancel className="ml-0 flex w-full flex-1 bg-green-700 text-white hover:bg-green-800 hover:text-white sm:!ml-0">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="ml-0 flex w-full flex-1 sm:!ml-0">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAccount;
