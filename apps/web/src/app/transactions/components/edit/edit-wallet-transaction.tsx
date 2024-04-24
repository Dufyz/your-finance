import { Transaction } from "@/types/Transaction";
import CreateWalletTransaction from "../create/create-wallet-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";

export default function EditWalletTransaction({
    transaction,
    wallets,
    user,
}: {
    transaction: Transaction,
    wallets: Wallet[],
    user: User,
}) {
    return (
        <CreateWalletTransaction transaction={transaction} wallets={wallets} user={user} />
    )
}