import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from "next/image"
import EditWallet from "./edit-wallet"

export default function Wallet() {
  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
          <div className="grid w-full items-center gap-4">
            <div className="w-full flex flex-row items-center justify-start space-y-1.5">
              <div className="w-full flex flex-row items-center justify-start gap-2"><b>Account Bank:</b> <div className="flex items-center justify-center gap-1">
                <div>
                  <Image src="/banks/itau.svg" width={16} height={16} alt="Itaú Unibanco" />
                </div>
                <span>Itaú Unibanco</span>
                </div></div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <p><b>Account nickname:</b> Itaú unibanco savings account</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <p><b>Initial amout: </b><span className="px-1">$ 00,00</span></p>
            </div>
            <div className="flex flex-col space-y-1.5">
            <p><b>Current amout: </b><span className="px-1">$ 00,00</span></p>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <EditWallet />
      </CardFooter>
    </Card>
  )
}
