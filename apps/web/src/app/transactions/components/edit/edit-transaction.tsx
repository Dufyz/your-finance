import DialogItem from "@/components/global/dialog-item";
import * as Dialog from "@radix-ui/react-dialog";
import { Transaction } from "@/types/Transaction";
import EditWalletTransaction from "./edit-wallet-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";

export default function EditTransaction({
  handleDialogItemSelect,
  handleDialogItemOpenChange,
  transaction,
  wallets,
  user
}: {
  handleDialogItemSelect: any;
  handleDialogItemOpenChange: any;
  transaction: Transaction;
  wallets: Wallet[];
  user: User;
}) {
  return (
    <DialogItem
      triggerChildren="Edit"
      onSelect={handleDialogItemSelect}
      onOpenChange={handleDialogItemOpenChange}
      className="!w-full sm:!max-w-4xl"
    >
      <Dialog.Description className="DialogDescription" />

      {transaction.wallet_id && (
        <div className="flex flex-col gap-4">
          <EditWalletTransaction
            transaction={transaction}
            wallets={wallets}
            user={user}
          />
        </div>
      )}

      {transaction.card_id && <h1>card</h1>}
    </DialogItem>
  );
}
