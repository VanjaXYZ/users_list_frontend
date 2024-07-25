import React from "react";
import Header from "../components/(home)/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
