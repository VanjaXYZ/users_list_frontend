"use server";
import { revalidatePath } from "next/cache";
import { Config } from "../../../Config";

export const handleUpdateUser = async (id: number, updatedUser: object) => {
  try {
    let response = await fetch(`${Config.baseUrl}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    revalidatePath("/users");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
