"use server";

import { cookies } from "next/headers";
import { Config } from "../../../Config";
import { redirect } from "next/navigation";

export const login = async (formData: FormData): Promise<any> => {
  const cookieStore = cookies();
  const username = formData.get("username");
  const password = formData.get("password");
  try {
    let response = await fetch(`${Config.baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Login failed...");
    }

    const token = response.text();
    cookieStore.set("token", (await token).toString());
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
  if (cookieStore.get("token")) {
    redirect("/home"); //needs to be used outside of try/catch method
  }
};
