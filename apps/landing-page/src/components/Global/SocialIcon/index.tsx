import Image from "next/image";

const SocialIcon = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-[2px] border-[#b9bcc1] hover:bg-[#eeeeeeaf]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center">{children}</div>
      </a>
    </div>
  );
};

export default SocialIcon;
