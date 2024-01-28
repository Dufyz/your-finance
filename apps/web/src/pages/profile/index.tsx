import useUser from "@/hooks/userHook";
import ProfileLayout from "@/layouts/ProfileLayout";

export default function Profile() {
  const { user } = useUser();

  console.log("user", user);

  return (
    <ProfileLayout>
      <div className="w-full flex-1 flex flex-col items-start justify-start px-[64px] py-[48px] gap-[48px]">
        <div className="w-full flex gap-[32px] items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[8px] w-[360px]">
            <label
              htmlFor=""
              className="text-[16px] text-gray-800 font-semibold"
            >
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#ced4da] bg-transparent text-[16px] text-gray-700 font-bold"
              value={user?.name}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start justify-center gap-[8px] w-[360px]">
            <label
              htmlFor=""
              className="text-[16px] text-gray-800 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full h-[48px] py-[12px] px-[16px] rounded-[8px] border-[1px] border-solid border-[#ced4da] bg-transparent text-[16px] text-gray-700 font-bold"
              value={user?.email}
            />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
