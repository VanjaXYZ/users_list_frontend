"use server";
import { revalidatePath } from "next/cache";
import { Config } from "../../../Config";

export const handleDeleteUser = async (id: number) => {
  try {
    let response = await fetch(`${Config.baseUrl}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/users");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
