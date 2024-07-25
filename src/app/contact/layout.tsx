import React from "react";
import Header from "../components/(home)/Header";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default ContactLayout;
