"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface INavbarItem {
  item: {
    id: number;
    name: string;
    icon: string;
    hasNotificantion?: boolean;
    path: string;
  };
  selected?: boolean;
}

const NavbarItem = ({ item, selected }: INavbarItem) => {
  const router = useRouter();

  return (
    <div
      className={`w-full flex gap-[16px] p-[12px] ${
        selected && "bg-[#f2f2f3]"
      } rounded-[8px] cursor-pointer`}
      onClick={() => {
        router.push(item.path);
      }}
    >
      <Image src={item.icon} width={24} height={24} alt="home icon" />
      <div className="w-full flex items-center justify-between">
        <span>{item.name}</span>
        {(item.id === 5 || item.id === 2) && (
          <div className="w-[8px] h-[8px] bg-[#099268] rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default NavbarItem;
