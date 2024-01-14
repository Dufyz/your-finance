import scrollTo from "@/utils/scrollTo";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <>
      <nav className=" w-full flex justify-between items-center min-h-16 bg-nav-bg sticky top-0 p-[24px] z-[9]">
        <div className="w-full mx-auto max-w-main-content flex justify-between items-center flex-wrap gap-[48px]">
          <div
            aria-label="Logo"
            onClick={() => scrollTo("Home")}
            className="cursor-pointer"
          >
            <img src="/logo.svg" alt="logo icon" />
          </div>
          <div className="hidden justify-around text-nav-primary lg:flex">
            <ul
              className="flex justify-around gap-[48px] text-base flex-wrap"
              aria-label="Menu items"
            >
              <li
                className="hover:text-text-primary-hover cursor-pointer"
                onClick={() => scrollTo("About")}
              >
                About Us
              </li>
              <li
                className="hover:text-text-primary-hover cursor-pointer"
                onClick={() => scrollTo("Plans")}
              >
                Plans
              </li>
              <li
                className="hover:text-text-primary-hover cursor-pointer"
                onClick={() => scrollTo("FAQs")}
              >
                FAQs
              </li>
              <li
                className="hover:text-text-primary-hover cursor-pointer"
                onClick={() => scrollTo("Contact")}
              >
                Contact
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
            {isMenuMobileOpen ? (
              <IconX color="#131827" />
            ) : (
              <IconMenu2 color="#131827" />
            )}
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
          <li
            className="hover:text-text-primary-hover cursor-pointer"
            onClick={() => {
              scrollTo("About");
              setIsMenuMobileOpen(false);
            }}
          >
            About Us
          </li>
          <li
            className="hover:text-text-primary-hover cursor-pointer"
            onClick={() => {
              scrollTo("Plans");
              setIsMenuMobileOpen(false);
            }}
          >
            Plans
          </li>
          <li
            className="hover:text-text-primary-hover cursor-pointer"
            onClick={() => {
              scrollTo("FAQs");
              setIsMenuMobileOpen(false);
            }}
          >
            FAQs
          </li>
          <li
            className="hover:text-text-primary-hover cursor-pointer"
            onClick={() => {
              scrollTo("Contact");
              setIsMenuMobileOpen(false);
            }}
          >
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
