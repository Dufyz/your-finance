import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <>
      <nav className=" w-full flex justify-between items-center min-h-16 bg-nav-bg sticky top-0 p-[32px] z-[9]">
        <div className="w-full mx-auto max-w-main-content flex justify-between items-center flex-wrap gap-[48px]">
          <div
            className="flex align-bottom items-center justify-start text-2xl text-title-primary font-bold"
            aria-label="Logo"
          >
            YourFinance
          </div>
          <div className="hidden justify-around text-nav-primary lg:flex">
            <ul
              className="flex justify-around gap-[48px] text-base flex-wrap"
              aria-label="Menu items"
            >
              <li className="hover:text-text-primary-hover cursor-pointer">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-text-primary-hover cursor-pointer">
                <a href="#">About</a>
              </li>
              <li className="hover:text-text-primary-hover cursor-pointer">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden justify-around items-center gap-[32px] text-base flex-wrap lg:flex">
            <button className="w-32 h-7 flex items-center justify-center bg-btn-primary hover:bg-btn-primary-hover text-text-primary font-medium rounded-md">
              <a href="#">Purchase</a>
            </button>
            <button className="w-32 h-7 flex items-center justify-center bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary font-medium rounded-md">
              <a href="#">Login</a>
            </button>
          </div>
          <div
            className="w-full flex justify-center items-center 280px:w-auto lg:hidden cursor-pointer"
            onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
            aria-label="Menu button"
          >
            <IconMenu2 color="#131827" />
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden 280px:h-[calc(100vh-96px)] bg-nav-bg ${
          isMenuMobileOpen ? "flex" : "hidden"
        } 
         fixed flex-col justify-start items-center w-full left-0 z-50 p-[32px] gap-[64px] flex-grow h-[calc(100vh-168px)] 
        `}
        aria-label="Menu items"
      >
        <ul className="w-full flex justify-center items-center flex-col gap-[16px] text-[20px] text-text-primary">
          <li className="hover:text-text-primary-hover cursor-pointer">Home</li>
          <li className="hover:text-text-primary-hover cursor-pointer">
            About
          </li>
          <li className="hover:text-text-primary-hover cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="flex justify-center items-center gap-[32px] flex-wrap">
          <button className="w-32 h-7 flex items-center justify-center bg-btn-primary hover:bg-btn-primary-hover text-text-primary font-medium rounded-md">
            Purchase
          </button>
          <button className="w-32 h-7 flex items-center justify-center bg-btn-secondary hover:bg-btn-secondary-hover text-text-secondary font-medium rounded-md">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
