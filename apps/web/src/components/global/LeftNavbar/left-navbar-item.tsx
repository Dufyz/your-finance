"use client";

import { useRouter, usePathname } from "next/navigation";

interface ILeftNavbarItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
  disabled?: boolean;
}

const LeftNavbarItem = ({
  icon,
  label,
  route,
  disabled
}: ILeftNavbarItemProps) => {
  const router = useRouter();
  const currentPathname = usePathname();

  const isItemSelected = currentPathname === route;

  return (
    <button
      className={`flex w-full items-center justify-start gap-3 rounded-md p-2 ${isItemSelected && "border border-solid border-gray-300 bg-gray-200"} ${disabled && "cursor-default opacity-50"} ${!disabled && "hover:border-gray-300 hover:bg-gray-200"}`}
      onClick={() => {
        if (!disabled) {
          router.push(route);
        }
      }}
      disabled={disabled}
    >
      <div>{icon}</div>
      <div>
        <h1 className="text-sm font-semibold text-gray-800">{label}</h1>
      </div>
    </button>
  );
};

export default LeftNavbarItem;
