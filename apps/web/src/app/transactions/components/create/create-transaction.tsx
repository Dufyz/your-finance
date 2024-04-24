"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconPlus } from "@tabler/icons-react";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";
import CreateWalletTransaction from "./create-wallet-transaction";

const CreateTransaction = ({ wallets, user }: {
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
            {/* <TabsTrigger value="card">Card</TabsTrigger> */}
          </TabsList>

          <TabsContent value="wallet">
            <CreateWalletTransaction wallets={wallets} user={user} />
          </TabsContent>

          {/* <TabsContent value="card">
            <TabCreateCardTransaction />
          </TabsContent> */}

        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransaction;
