import Navbar from "@/components/Global/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-bg-primary">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
