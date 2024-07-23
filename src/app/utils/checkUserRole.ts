"use server";

import { cookies } from "next/headers";
import { Config } from "../../../Config";

export const fetchUserData = async () => {
  const token = cookies().get("token")?.value;

  const data = await fetch(`${Config.baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await data.json();
  return result;
};
