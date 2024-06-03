import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { i18n } from "@/translate/i18";
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
      <DialogContent className="bg-[#f1f3f5] sm:max-w-[425px]">
        <div className="">
          <div className="space-y- flex flex-col items-center justify-center p-4 md:p-5">
            <p className="text-text-primary text-start text-[20px] sm:text-center">
              {i18n.t("donate.description")}
            </p>
            <div>
              <Image
                src="/qr-code.svg"
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
