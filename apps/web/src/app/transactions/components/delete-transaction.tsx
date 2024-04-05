import DialogItem from "@/components/global/dialog-item";
import * as Dialog from "@radix-ui/react-dialog";


export default function DeleTransaction({
  handleDialogItemSelect,
  handleDialogItemOpenChange,
}: {
  handleDialogItemSelect: any;
  handleDialogItemOpenChange: any;
}) {
  return (
    <DialogItem
    triggerChildren="Delete"
    onSelect={handleDialogItemSelect}
    onOpenChange={handleDialogItemOpenChange}
  >
    <Dialog.Title className="DialogTitle">Are you absolutely sure?</Dialog.Title>

    <Dialog.Description className="DialogDescription">
      This action cannot be undone. This will permanently delete this transaction data from our servers.
    </Dialog.Description>

    <div className="DialogActions flex flex-col items-center justify-start gap-2" >
      <Dialog.Close asChild>
        <button className="DialogButton w-full flex flex-2 p-3 items-center justify-center bg-green-700 hover:bg-green-800 rounded-md text-white">Cancel</button>
      </Dialog.Close>
    <button className="DialogButton w-full flex flex-1 p-3 px-6 items-center justify-center bg-red-600 hover:bg-red-700  rounded-md text-white">Delete</button>
     
    </div>
  </DialogItem>
  )
}
