"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconDotsVertical } from "@tabler/icons-react";

import { useRef, useState } from "react";
import EditTransaction from "./edit-transaction";

import "../styles/tools-transaction.css";
import DeleteTransaction from "./delete-transaction";
import { Transaction } from "@/types/Transaction";

export default function ToolsTransaction({ transaction }: {
  transaction: Transaction
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasOpenDialog, setHasOpenDialog] = useState(false);
  const dropdownTriggerRef = useRef(null);
  const focusRef = useRef(null);

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open) {
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
