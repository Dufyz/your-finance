import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import Image from "next/image";
import { Dispatch } from "react";
import { SetStateAction } from "react";

export function DonateModal({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogHeader></DialogHeader>
      <DialogContent className="bg-[#fff] sm:max-w-[425px]">
        <div className="">
          <p>QR CODE PIX</p>
          <div className="flex flex-col items-center justify-center p-4 md:p-5">
            <div>
              <Image
                src="/qr-code.jpeg"
                alt="Donate qrcode"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
