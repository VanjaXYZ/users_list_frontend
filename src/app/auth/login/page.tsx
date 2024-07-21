import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <form>
      <h3>Welcome</h3>
      <div>
        <input type="text" name="name" />
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Page;
