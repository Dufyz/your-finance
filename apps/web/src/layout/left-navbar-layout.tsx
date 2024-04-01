import LeftNavbar from "@/components/global/LeftNavbar";

const LeftNavbarLayout = ({ children} : {
    children: React.ReactNode;
}) => {
    return (
       <div className="w-full bg-gray-100 flex items-start justify-start">
        <LeftNavbar />
        <div className="w-full flex-1 h-screen px-12 py-12 overflow-auto">
            {children}
        </div>
       </div>
    )
}

export default LeftNavbarLayout;