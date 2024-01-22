import { Avatar } from "../Avatar";

export const ProfileCard = () => {
  return (
    <div className="w-full flex items-center gap-4 hover:bg-[#f2f2f3] py-[12px] px-[8px] rounded-[8px] cursor-pointer">
      <Avatar />
      <div className="w-full flex flex-col font-medium text-sm">
        <span className="text-gray-500">Guilherme Thomaz</span>
        <span className="text-gray-400">Starter</span>
      </div>
    </div>
  );
};
