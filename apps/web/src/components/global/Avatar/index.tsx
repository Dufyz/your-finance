interface IAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar = ({ name, size = "sm" }: IAvatarProps) => {
  let AvatarSize;
  let FontSize;

  switch (size) {
    case "sm":
      AvatarSize = "min-w-[24px] min-h-[24px]";
      FontSize = "text-sm";
      break;
    case "md":
      AvatarSize = "min-w-10 min-h-10";
      FontSize = "text-md";
      break;
    case "lg":
      AvatarSize = "min-w-[160px] min-h-[160px]";
      FontSize = "text-[48px]";
      break;
    default:
      AvatarSize = "min-w-[24px] min-h-[24px]";
      FontSize = "text-sm";
      break;
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center ${AvatarSize} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 ${FontSize}`}
      >
        {name?.slice(0, 2)}
      </span>
    </div>
  );
};
