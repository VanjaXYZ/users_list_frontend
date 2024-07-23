"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
  try {
    cookies().delete("token");
  } catch (error) {
    console.error("Error deleting token:", error);
  }

  redirect("/"); // Preusmjeravanje nakon brisanja kolačića
};
