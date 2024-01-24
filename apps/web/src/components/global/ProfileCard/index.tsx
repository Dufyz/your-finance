import { Avatar } from "../Avatar";
import DisplayName from "@/utils/displayName";
import Loader from "../Loader";

export const ProfileCard = ({ user }: any) => {
  if (!user) {
    return (
      <div className="w-full flex items-center gap-4 hover:bg-[#f2f2f3] py-[12px] px-[8px] rounded-[8px] cursor-pointer">
        <Loader />
        <div className="w-full flex flex-col font-medium text-sm">
          <span className="text-gray-500">Loading...</span>
          <span className="text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  const displayName = DisplayName(user?.name);

  return (
    <div className="w-full flex items-center gap-4 hover:bg-[#f2f2f3] py-[12px] px-[8px] rounded-[8px] cursor-pointer">
      <Avatar name={user?.name} />
      <div className="w-full flex flex-col font-medium text-sm">
        <span className="text-gray-500">{displayName}</span>
        <span className="text-gray-400">Starter</span>
      </div>
    </div>
  );
};
