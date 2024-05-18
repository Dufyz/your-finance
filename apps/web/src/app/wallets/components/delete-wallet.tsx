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
import { deleteWallet } from "@/fetchers/wallets/deleteWallet";
import { Wallet } from "@/types/Wallet";
import { toast } from "sonner";

export function DeleteWallet({ wallet }: { wallet: Wallet }) {
  const handleDeleteWallet = async () => {
    try {
      await deleteWallet({ id: wallet.id });
      toast.success("Wallet deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while trying to delete the wallet.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="w-full rounded-md bg-red-700 p-2 text-white"
        >
          Delete
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            wallet and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteWallet}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
