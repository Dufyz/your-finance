import DialogItem from "@/components/global/dialog-item";
import { deleteTransaction } from "@/fetchers/transactions/deleteTransaction";
import { Transaction } from "@/types/Transaction";
import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "sonner";

export default function DeleteTransaction({
  handleDialogItemSelect,
  handleDialogItemOpenChange,
  transaction
}: {
  handleDialogItemSelect: any;
  handleDialogItemOpenChange: any;
  transaction: Transaction;
}) {
  const handleDeleteTransaction = async () => {
    try {
      await deleteTransaction({
        id: transaction.id
      });

      toast.success("Transaction deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the transaction.");
    }
  };
  return (
    <DialogItem
      triggerChildren="Delete"
      onSelect={handleDialogItemSelect}
      onOpenChange={handleDialogItemOpenChange}
    >
      <Dialog.Title className="DialogTitle">
        Are you absolutely sure?
      </Dialog.Title>

      <Dialog.Description className="DialogDescription !text-muted-foreground">
        This action cannot be undone. This will permanently delete this
        transaction data from our servers.
      </Dialog.Description>

      <div className="DialogActions flex flex-col items-center justify-start gap-2">
        <Dialog.Close asChild>
          <button className="DialogButton flex-2 flex w-full items-center justify-center rounded-md bg-green-700 p-3 text-white hover:bg-green-800">
            Cancel
          </button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <button
            onClick={handleDeleteTransaction}
            className="DialogButton flex w-full flex-1 items-center justify-center rounded-md bg-red-600 p-3 px-6  text-white hover:bg-red-700"
          >
            Delete
          </button>
        </Dialog.Close>
      </div>
    </DialogItem>
  );
}
