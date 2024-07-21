import Link from "next/link";
import React from "react";

const ActionButtons = () => {
  return (
    <div>
      <Link
        href={"/users"}
        className="border rounded bg-teal-700 hover:bg-teal-500 text-white font-bold uppercase tracking-widest px-4 py-1"
      >
        Login
      </Link>
      <Link
        href={"/"}
        className="border rounded bg-teal-700 hover:bg-teal-500 text-white font-bold uppercase tracking-widest px-4 py-1"
      >
        Signup
      </Link>
    </div>
  );
};

export default ActionButtons;
