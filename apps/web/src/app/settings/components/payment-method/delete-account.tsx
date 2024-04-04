import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
const DeleteAccount = () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className=" text-red-600  hover:text-red-700 underline text-sm p-2 rounded-md">Delete account</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will delete your account. This action can be undone within 30 days.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full flex !flex-col gap-4">
            <AlertDialogCancel className="w-full ml-0 sm:!ml-0 flex flex-1 bg-green-700 hover:bg-green-800 text-white hover:text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction className="w-full ml-0 sm:!ml-0 flex flex-1">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  

  export default DeleteAccount