import * as React from "react";

import {
  Card as ShadcnCard,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import Image from "next/image";
import EditCard from "./edit-card";

export default function Card() {
  return (
    <ShadcnCard className="shadow-md">
      <CardContent className="p-6">
        <div className="grid w-full items-center gap-4">
          <div className="flex w-full flex-row items-center justify-start space-y-1.5">
            <div className="flex w-full flex-row items-center justify-start gap-2">
              <b>Card Bank:</b>{" "}
              <div className="flex items-center justify-center gap-1">
                <div>
                  <Image
                    src="/banks/itau.svg"
                    width={16}
                    height={16}
                    alt="Itaú Unibanco"
                  />
                </div>

                <span>Itaú Unibanco</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-start space-y-1.5">
            <div className="flex w-full flex-row items-center justify-start gap-2">
              <b>Card nickname:</b>{" "}
              <div className="flex items-center justify-center gap-1">
                <div>
                  <Image
                    src="/flags/mastercard.png"
                    width={16}
                    height={16}
                    alt="Itaú Unibanco"
                  />
                </div>
                <span>Itaú Unibanco Black Mastercard</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <p>
              <b>Current invoice: </b>
              <span className="px-1">$ 00,00</span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <EditCard />
      </CardFooter>
    </ShadcnCard>
  );
}
