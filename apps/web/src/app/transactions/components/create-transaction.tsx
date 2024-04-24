"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconPlus } from "@tabler/icons-react";
import TabCreateWalletTransaction from "./tab-create-wallet-transaction";
import TabCreateCardTransaction from "./tab-create-card-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";


const CreateTransaction = ({wallets, user}: {
  user: User,
  wallets: Wallet[]
}) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-12 w-12 gap-1 rounded-full bg-green-700 text-sm hover:bg-green-800"
        >
          <IconPlus size={32} color="#fff" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full sm:max-w-4xl">
        <DialogHeader />

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="card">Card</TabsTrigger>
          </TabsList>

          <TabCreateWalletTransaction wallets={wallets} user={user}/>
          <TabCreateCardTransaction />

        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransaction;
