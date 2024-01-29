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
    title: "Plan",
    path: "/profile/plan",
  },
  {
    title: "Billing",
    path: "/profile/billing",
  },

  {
    title: "Help",
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
    case "/profile/plan":
      selectedOption = 2;
      break;
    case "/profile/billing":
      selectedOption = 3;
      break;
    case "/profile/security":
      selectedOption = 4;
      break;
    case "/profile/help":
      selectedOption = 5;
      break;
    case "/profile/signout":
      selectedOption = 6;
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
        <div className="w-full flex flex-col py-[32px] px-[64px] gap-[24px]">
          <div className="w-full min-h-[240px] bg-[red] rounded-[8px] relative">
            <div className="w-full top-[200px] px-[64px] flex items-center justify-between absolute">
              <div className="flex items-center justify-center gap-[32px]">
                <div className="w-[160px] h-[160px] bg-[#000] rounded-[50%] border-[2px] border-solid" />
                <div className="py-[16px]">
                  <h1 className="text-[24px] text-gray-700">
                    {DisplayName(user?.name)}
                  </h1>
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
          </div>
          <div className="w-full pt-[140px]">
            <div className="flex gap-[64px]">
              {settingsOptions.map((option, index) => (
                <span
                  onClick={() => {
                    if (index === 4) {
                      handleLogout();
                    }

                    return router.push(option.path);
                  }}
                  className={`${
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
