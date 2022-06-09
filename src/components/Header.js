import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header
      className={
        navbar
          ? "lg:sticky top-0 z-10 active overflow-hidden"
          : "bg-black lg:sticky top-0 z-10 overflow-hidden"
      }
    >
      <div className="container mx-auto py-5 px-8 md:px-16 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-white text-lg">thisisjohn.com</h2>
        </div>
        <div className="hidden md:flex flex-wrap flex-row items-center text-white text-base font-medium space-x-8">
          <a href="!#" rel="noreferrer">
            Skills &amp; Experience
          </a>
          <a href="!#" rel="noreferrer">
            Work
          </a>
          <a href="!#" rel="noreferrer">
            About Me
          </a>
          <a href="!#" rel="noreferrer">
            Contact
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
