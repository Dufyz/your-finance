"use client";

import { useRouter, usePathname } from "next/navigation";

interface ILeftNavbarItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
  disabled?: boolean;
}

const LeftNavbarItem = ({icon, label, route, disabled}: ILeftNavbarItemProps) => {
  const router = useRouter();
  const currentPathname = usePathname();
  
  const isItemSelected = currentPathname === route;

  return (
    <button
      className={`w-full flex items-center justify-start gap-3 p-2 rounded-md ${isItemSelected && "bg-gray-200 border border-solid border-gray-300"} ${disabled && "opacity-50 cursor-default"} ${!disabled && "hover:bg-gray-200 hover:border-gray-300"}`}
      onClick={() => {
        if (!disabled) {
          router.push(route);
        }
      }}
      disabled={disabled}
    >
      <div>
        {icon}
      </div>
      <div>
        <h1 className="text-sm text-gray-800 font-semibold">{label}</h1>
      </div>
    </button>
  );
}

export default LeftNavbarItem;