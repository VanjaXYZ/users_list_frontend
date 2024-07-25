import React from "react";
import NavLinks from "./NavLinks";
import LogoImage from "../(shared)/LogoImage";

const Header = () => {
  return (
    <header className="h-20 w-full bg-black/70 absolute z-10 flex items-center">
      <div>
        <LogoImage />
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
