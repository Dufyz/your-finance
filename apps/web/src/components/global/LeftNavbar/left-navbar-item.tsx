"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const currentPathname = usePathname();

  const isItemSelected = currentPathname === route;

  if (disabled) {
    return (
      <div className="flex w-full cursor-default items-center justify-start gap-3 rounded-md p-2 opacity-50">
        <div>{icon}</div>
        <div>
          <h1 className="text-sm font-semibold text-gray-800">{label}</h1>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={route}
      className={`flex w-full items-center justify-start gap-3 rounded-md p-2 ${
        isItemSelected && "border border-solid border-gray-300 bg-gray-200"
      } hover:bg-gray-200" hover:border-gray-300`}
    >
      <div>{icon}</div>
      <div>
        <h1 className="text-sm font-semibold text-gray-800">{label}</h1>
      </div>
    </Link>
  );
};

export default LeftNavbarItem;
