"use client";

import Image from "next/image";
import { ProfileCard } from "../ProfileCard";
import NavbarItem from "./navbarItem";
import useUser from "../../../hooks/userHook";
import { usePathname, useRouter } from "next/navigation";
import supabase from "@/config/supabase";

const MainMenuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
    path: "/",
  },
  {
    id: 2,
    name: "Transactions",
    icon: "/icons/transfer.svg",
    path: "/",
  },
  {
    id: 3,
    name: "Wallets",
    icon: "/icons/wallet.svg",
    path: "/",
  },
  {
    id: 4,
    name: "Cards",
    icon: "/icons/credit-card.svg",
    path: "/cards",
  },
  {
    id: 5,
    name: "Goals",
    icon: "/icons/goal.svg",
    path: "/",
  },
  {
    id: 6,
    name: "Notifications",
    icon: "/icons/notification.svg",
    path: "/",
  },
];

export const Navbar = () => {
  const { user } = useUser();

  const path = usePathname();

  let selectedItem = 0;

  switch (path) {
    case "/":
      selectedItem = 1;
      break;
    case "/transactions":
      selectedItem = 2;
      break;
    case "/wallets":
      selectedItem = 3;
      break;
    case "/cards":
      selectedItem = 4;
      break;
    case "/goals":
      selectedItem = 5;
      break;
    case "/notifications":
      selectedItem = 6;
      break;
    case "/profile":
      selectedItem = 0;
      break;
    default:
      selectedItem = 0;
      break;
  }

  return (
    <div className="w-full max-w-[248px] h-screen bg-[white] py-[16px] flex flex-col gap-[40px] p-[24px] border-r-[2px] border-r-solid border-r-[#eff1f3]">
      <div className="w-full py-[8px]">
        <div className="w-full flex flex-col items-center justify-center gap-[8px]">
          <Image src="/logo.png" width={64} height={64} alt="logo" />
          <h1 className="text-[28px] font-bold text-[#099268]">YourFinance</h1>
        </div>
      </div>
      <div className="w-full flex flex-col  items-start justify-between h-[100%] gap-[40px]">
        <div className="w-full flex flex-col gap-[24px]">
          {MainMenuItems.map((item, index) => (
            <NavbarItem
              key={index}
              item={item}
              selected={selectedItem === item.id}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-[16px]">
          <ProfileCard user={user} />
          <button
            onClick={() => {
              supabase.auth.signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
