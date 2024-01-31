import LabelInput from "@/components/global/LabelInput";
import useUser from "@/hooks/userHook";
import ProfileLayout from "@/layouts/ProfileLayout";
import formatDate from "@/utils/formatDate";

export default function Profile() {
  const { user } = useUser();

  return (
    <ProfileLayout>
      <div className="w-full flex-1 flex flex-col items-start justify-start gap-[48px]">
        <div className="w-full flex flex-col gap-[32px] items-start justify-start max-w-[792px]">
          <LabelInput label="Name" value={user?.name} />
          <LabelInput label="Email" value={user?.email} />
          <LabelInput label="Phone" value={"(62) 9869-8465"} />
          <LabelInput
            label="Member Since"
            value={formatDate(user?.created_at)}
          />

          <div className="flex flex-row items-start justify-center gap-[16px] w-full">
            <LabelInput label="Password" value={"************"} />
            <LabelInput label="Password" value={"************"} />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
