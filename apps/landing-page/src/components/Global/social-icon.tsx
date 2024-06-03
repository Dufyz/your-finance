import Link from "next/link";

export default function SocialIcon({
  children,
  link
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center rounded-full border-2 border-[#b9bcc1] p-2 hover:bg-[#eeeeeeaf]">
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </Link>
  );
}
