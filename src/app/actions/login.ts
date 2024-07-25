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
      throw new Error("There was an issue proccessing your request...");
    }

    const token = response.text();
    cookieStore.set("token", (await token).toString());
  } catch (error) {
    console.error(error);
  }
  redirect("/home"); //needs to be used outside of try/catch method
};
