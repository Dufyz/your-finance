import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";



const DialogItem = forwardRef((props: any, forwardedRef: any) => {
    const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } = props;
    return (
      <Dialog.Root onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild>
          <DropdownMenu.Item
            {...itemProps}
            ref={forwardedRef}
            className="DropdownMenuItem"
            onSelect={(event) => {
              event.preventDefault();
              onSelect && onSelect();
            }}
          >
            {triggerChildren}
          </DropdownMenu.Item>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            {children}
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  });
  

  export default DialogItem;