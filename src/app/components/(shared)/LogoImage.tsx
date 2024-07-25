import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/logo.png";
const LogoImage = () => {
  return (
    <Image
      src={Logo}
      width={75}
      height={75}
      alt="Logo image"
      className="text-white"
    />
  );
};

export default LogoImage;
