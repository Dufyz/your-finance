"use client";

import { Wallet as WalletType } from "@/types/Wallet";

import { User } from "@/types/User";
import CreateWallet from "./create-wallet";

export default function EditWallet({
  wallet,
  user
}: {
  wallet: WalletType;
  user: User;
}) {
  return <CreateWallet user={user} wallet={wallet} />;
}
