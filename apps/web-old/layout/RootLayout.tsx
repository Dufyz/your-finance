import Navbar from "@/components/global/navbar";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex bg-[#f4f5f7]">
      <Navbar />
      {children}
    </div>
  );
}
