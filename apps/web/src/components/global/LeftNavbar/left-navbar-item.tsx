"use client";

import { useRouter, usePathname } from "next/navigation";

interface ILeftNavbarItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
}

const LeftNavbarItem = ({icon, label, route}: ILeftNavbarItemProps) => {
  const router = useRouter();
  const currentPathname = usePathname();
  
  const isItemSelected = currentPathname === route;

    return (
      <button className={`w-full flex items-center gap-4 p-2 cursor-pointer rounded-md ${isItemSelected && "bg-gray-200"}`}
      onClick={() => {
        router.push(route);
      }}>
        <div>
          {icon}
        </div>
        <div>
          <h1 className="text-base text-black font-semibold">{label}</h1>
        </div>
      </button>
    );
}

export default LeftNavbarItem;