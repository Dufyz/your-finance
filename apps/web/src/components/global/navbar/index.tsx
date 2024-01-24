import Image from "next/image";
import { useState } from "react";
import supabase from "@/config/supabase";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { ProfileCard } from "../ProfileCard";
import NavbarItem from "./navbarItem";
import useUser from "@/hooks/userHook";

const MainMenuItems = [
  {
    id: 1,
    name: "Home",
    icon: "/icons/home.svg",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    id: 3,
    name: "Wallets",
    icon: "/icons/wallet.svg",
  },
  {
    id: 4,
    name: "Cards",
    icon: "/icons/credit-card.svg",
  },
  {
    id: 5,
    name: "Goals",
    icon: "/icons/goal.svg",
  },
  {
    id: 6,
    name: "Notifications",
    icon: "/icons/notification.svg",
  },
  {
    id: 7,
    name: "Settings",
    icon: "/icons/settings.svg",
  },
];

export const Navbar = () => {
  const { user } = useUser();

  const [selectedItem, setSelectedItem] = useState(1);

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/login");

    toast.success("Logout successfully");
  };

  return (
    <div className="w-full max-w-[248px] h-screen bg-[white] py-[16px] flex flex-col gap-[40px] p-[24px]">
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
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-[16px]">
          <ProfileCard user={user} />
          <button
            className="text-gray-500 hover:bg-[#f2f2f3] p-[12px] rounded-[8px]"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
