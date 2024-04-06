import LeftNavbar from "@/components/global/LeftNavbar";

const LeftNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-start justify-start bg-gray-100">
      <LeftNavbar />
      <div className="h-screen w-full flex-1 overflow-auto px-12 py-12">
        {children}
      </div>
    </div>
  );
};

export default LeftNavbarLayout;
