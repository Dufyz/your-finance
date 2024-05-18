import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import EditWallet from "./edit-wallet";
import { Wallet } from "@/types/Wallet";
import { banks } from "@/data/banks";
import { User } from "@/types/User";
import FormatMoney from "@/utils/format-money";
import capitalizeFirstLetter from "@/utils/capitlize-first-letter";

export default function WalletCard({
  wallet,
  user
}: {
  wallet: Wallet;
  user: User;
}) {
  let bank;

  if (wallet.bank_id) {
    bank = banks.find((bank) => bank.id === wallet.bank_id);
  }

  if (!bank || !wallet.bank_id) {
    bank = banks[0];
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <div className="grid w-full items-center gap-4">
          <div className="flex w-full flex-row items-center justify-start space-y-1.5">
            <div className="flex w-full flex-row items-center justify-start gap-2">
              <div className="flex items-center justify-center gap-2">
                <div>
                  <Image
                    src={bank.logo_src}
                    width={16}
                    height={16}
                    alt={bank?.name}
                  />
                </div>
                <span>{bank.name}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <p>
              <b>Nickname:</b> {wallet.nickname}
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <p>
              <b>Type:</b> {capitalizeFirstLetter(wallet.type)}
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <p>
              <b>Balance: </b>
              <span className="px-1">
                <FormatMoney
                  value={wallet.current_balance}
                  currency={user.currency}
                />
              </span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <EditWallet wallet={wallet} />
      </CardFooter>
    </Card>
  );
}
