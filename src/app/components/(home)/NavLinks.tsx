"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const links = [
    {
      href: "/home",
      name: "Home",
    },
    {
      href: "/admin/users",
      name: "Users",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-center w-full space-x-12">
      {links.map((link: { href: string; name: string }) => (
        <button
          key={link.href}
          className={`font-semibold text-xl uppercase tracking-wider text-white ${
            pathname === link.href ? "underline" : ""
          }`}
        >
          <Link href={link.href}>{link.name}</Link>
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;
