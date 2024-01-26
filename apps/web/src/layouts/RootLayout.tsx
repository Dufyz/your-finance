import Navbar from "@/components/global/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex bg-[#fff]">
      <Navbar />
      {children}
    </div>
  );
}
