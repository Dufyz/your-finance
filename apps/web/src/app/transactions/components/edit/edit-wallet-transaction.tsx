import { Transaction } from "@/types/Transaction";
import CreateWalletTransaction from "../create/create-wallet-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";
import { Dispatch } from "react";

export default function EditWalletTransaction({
  transaction,
  wallets,
  user,
  setOpen
}: {
  transaction: Transaction;
  wallets: Wallet[];
  user: User;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <CreateWalletTransaction
      transaction={transaction}
      wallets={wallets}
      user={user}
      setOpen={setOpen}
    />
  );
}
