import LeftNavbar from "@/components/global/LeftNavbar";

const LeftNavbarLayout = ({ children} : {
    children: React.ReactNode;
}) => {
    return (
       <div className="w-full bg-gray-100 flex items-start justify-start">
        <LeftNavbar />
        <div className="w-full flex-1 h-screen p-4 bg-red-500">
            {children}
        </div>
       </div>
    )
}

export default LeftNavbarLayout;