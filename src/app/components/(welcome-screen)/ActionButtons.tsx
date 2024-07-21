import Link from "next/link";
import React from "react";

const ActionButtons = () => {
  return (
    <div>
      <Link
        href={"/auth/login"}
        className="border rounded bg-teal-700 hover:bg-teal-500 text-white font-bold uppercase tracking-widest px-4 py-1"
      >
        Login
      </Link>
      <Link
        href={"/auth/signup"}
        className="border rounded bg-teal-700 hover:bg-teal-500 text-white font-bold uppercase tracking-widest px-4 py-1"
      >
        Signup
      </Link>
    </div>
  );
};

export default ActionButtons;
