"use server";
import { revalidatePath } from "next/cache";
import { Config } from "../../../Config";

export const handleSubmit = async (formData: FormData) => {
  try {
    let response = await fetch(`${Config.baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        age: formData.get("age"),
      }),
    });
    revalidatePath("/users");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
