import Navbar from "@/components/Global/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-background-primary">
      <Navbar />
      <div className="max-w-main-content mx-auto flex">
        <main>{children}</main>
      </div>
    </div>
  );
}
