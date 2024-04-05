import DialogItem from "@/components/global/dialog-item";
import * as Dialog from "@radix-ui/react-dialog";


export default function EditTransaction({
  handleDialogItemSelect,
  handleDialogItemOpenChange,
}: {
  handleDialogItemSelect: any;
  handleDialogItemOpenChange: any;
}) {
  return (
    <DialogItem
    triggerChildren="Edit"
    onSelect={handleDialogItemSelect}
    onOpenChange={handleDialogItemOpenChange}
  >
    <Dialog.Title className="DialogTitle">Edit</Dialog.Title>
    <Dialog.Description className="DialogDescription">
      Edit this record below.
    </Dialog.Description>
    <p>…</p>
  </DialogItem>
  )
}
