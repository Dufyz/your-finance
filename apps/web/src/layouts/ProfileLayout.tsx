import { Avatar } from "@/components/global/Avatar";
import supabase from "@/config/supabase";
import useUser from "@/hooks/userHook";
import RootLayout from "@/layouts/RootLayout";
import DisplayName from "@/utils/displayName";
import { useRouter } from "next/router";
import { useState } from "react";

const settingsOptions = [
  {
    title: "My details",
    path: "/profile",
  },
  {
    title: "Sign out",
    path: "/profile",
  },
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const path = router.pathname;

  let selectedOption = 1;

  switch (path) {
    case "/profile":
      selectedOption = 1;
      break;
    case "/profile/signout":
      selectedOption = 2;
      break;
    default:
      selectedOption = 1;
      break;
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Error logging out:", error.message);
    router.push("/");
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <RootLayout>
      <div className="w-full min-h-[100%] overflow-auto">
        <div className="w-full flex flex-col py-[32px] px-[64px] gap-[32px]">
          <div className="w-full top-[ px-[64px] flex items-center justify-between">
            <div className="flex items-center justify-center gap-[32px]">
              <Avatar name={user?.name} size={"lg"} />
              <div className="py-[16px]">
                <h1 className="text-[32px] text-gray-700">
                  {DisplayName(user?.name)}
                </h1>
                <span className="text-gray-400 text-[24px]">Starter</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[16px]">
              {isEditing && (
                <>
                  <button
                    className="w-[80px] py-[8px] px-[12px] border-[2px] border-solid border-[#dee2e6] rounded-[8px] font-bold text-[14px] text-gray-700"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </button>
                  <button className="w-[80px] py-[8px] px-[12px] bg-[#099268] rounded-[8px] font-bold text-[14px] text-white">
                    Save
                  </button>
                </>
              )}
              {!isEditing && (
                <button
                  className="w-[80px] py-[8px] px-[12px] bg-[#099268] rounded-[8px] font-bold text-[14px] text-white"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="w-full pt-[32px]">
            <div className="flex gap-[64px]">
              {settingsOptions.map((option, index) => (
                <span
                  onClick={() => {
                    if (index === 1) {
                      handleLogout();
                    }

                    return router.push(option.path);
                  }}
                  className={`
                  text-[18px] 
                  ${
                    selectedOption === index + 1
                      ? "text-[#099268] font-semibold"
                      : "text-gray-500"
                  } cursor-pointer`}
                >
                  {option.title}
                </span>
              ))}
            </div>
          </div>
          <div className="py-[32px]">{children}</div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProfileLayout;
