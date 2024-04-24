"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconDotsVertical } from "@tabler/icons-react";

import { useRef, useState } from "react";

import "../styles/tools-transaction.css";
import DeleteTransaction from "./delete-transaction";
import { Transaction } from "@/types/Transaction";
import EditTransaction from "./edit/edit-transaction";
import { Wallet } from "@/types/Wallet";
import { User } from "@/types/User";

export default function ToolsTransaction({ transaction, wallets, user }: {
  transaction: Transaction;
  wallets: Wallet[];
  user: User;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasOpenDialog, setHasOpenDialog] = useState(false);
  const dropdownTriggerRef = useRef(null);
  const focusRef = useRef<null | any>(null);

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }

  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger asChild className="">
        <IconDotsVertical size={16} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="DropdownMenuContent"
        sideOffset={5}
        hidden={hasOpenDialog}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            focusRef.current.focus();
            focusRef.current = null;
            event.preventDefault();
          }
        }}
      >
        <EditTransaction
          handleDialogItemOpenChange={handleDialogItemOpenChange}
          handleDialogItemSelect={handleDialogItemSelect}
          transaction={transaction}
          wallets={wallets}
          user={user}
        />

        <DropdownMenu.Separator className="DropdownMenuSeparator" />

        <DeleteTransaction
          handleDialogItemOpenChange={handleDialogItemOpenChange}
          handleDialogItemSelect={handleDialogItemSelect}
          transaction={transaction}
        />

        <DropdownMenu.Arrow className="DropdownMenuArrow" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
