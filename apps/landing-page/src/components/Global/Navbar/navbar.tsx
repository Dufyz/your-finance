"use client";

import { i18n } from "@/translate/i18";
import scrollTo from "@/utils/scrollTo";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAVBAR_ITEMS } from "./data/navbar-items";
import NavbarMobile from "./navbar-mobile";

export default function Navbar() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[9] flex min-h-16 w-full items-center justify-between bg-gray-100 p-6">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-12">
          <Link href={"#Home"}>
            <div aria-label="Logo">
              <Image src="/logo.svg" alt="logo icon" width={48} height={48} />
            </div>
          </Link>
          <div className="hidden justify-around text-gray-700 lg:flex">
            <ul className="flex flex-wrap justify-around gap-12 text-base">
              {NAVBAR_ITEMS.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-green-700">
                  <Link href={item.href}>{i18n.t(`navbar.${item.label}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden flex-wrap items-center justify-around gap-8 text-base lg:flex">
            <button className="flex h-7 w-32 items-center justify-center rounded-md bg-blue-900 font-medium text-white hover:bg-blue-950">
              <Link href="#">{i18n.t("navbar.button.login")}</Link>
            </button>
          </div>
          <div
            className="280px:w-auto flex cursor-pointer items-center justify-center lg:hidden"
            onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
            aria-label="Menu button"
          >
            {isMenuMobileOpen ? (
              <IconX color="#131827" />
            ) : (
              <IconMenu2 color="#131827" />
            )}
          </div>
        </div>
      </nav>

      <NavbarMobile
        isMenuMobileOpen={isMenuMobileOpen}
        setIsMenuMobileOpen={setIsMenuMobileOpen}
      />
    </>
  );
}
