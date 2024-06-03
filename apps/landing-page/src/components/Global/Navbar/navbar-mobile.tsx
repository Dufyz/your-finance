import Link from "next/link";
import { NAVBAR_ITEMS } from "./data/navbar-items";
import { i18n } from "@/translate/i18";
import { Dispatch } from "react";
import { SetStateAction } from "react";

type NavbarMobielProps = {
  isMenuMobileOpen: boolean;
  setIsMenuMobileOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarMobile({
  isMenuMobileOpen,
  setIsMenuMobileOpen
}: NavbarMobielProps) {
  return (
    <div
      className={`h-[calc(100vh-96px)] bg-gray-100 lg:hidden ${
        isMenuMobileOpen ? "flex" : "hidden"
      } 
         fixed left-0 z-50  w-full flex-grow flex-col items-center justify-start gap-16 p-8 
        `}
    >
      <ul className="flex w-full flex-col items-center justify-center gap-4 text-lg text-gray-700">
        {NAVBAR_ITEMS.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-green-700"
            onClick={() => setIsMenuMobileOpen(false)}
          >
            <Link href={item.href}>{i18n.t(`navbar.${item.label}`)}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <button className="flex h-7 w-32 items-center justify-center rounded-md bg-blue-900 font-medium text-white hover:bg-blue-950">
          <Link href="#">{i18n.t("navbar.button.login")}</Link>
        </button>
      </div>
    </div>
  );
}
