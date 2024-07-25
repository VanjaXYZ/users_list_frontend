import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="h-20 w-full bg-black/70 absolute z-10 flex items-center">
      <NavLinks />
    </header>
  );
};

export default Header;
