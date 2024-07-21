"use server";
import { revalidatePath } from "next/cache";
import { Config } from "../../../Config";

export const handleUpdateUser = async (id: number, formData: FormData) => {
  try {
    let response = await fetch(`${Config.baseUrl}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        age: formData.get("age"),
        job: formData.get("job"),
        work_experience: formData.get("work_experience"),
        hobbies: formData.get("hobbies"),
      }),
    });
    revalidatePath("/users");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
