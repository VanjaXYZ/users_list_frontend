"use server";
import { revalidatePath } from "next/cache";
import { Config } from "../../../Config";

export const handleSubmit = async (formData: FormData) => {
  try {
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
      email: formData.get("email"),
      age: parseInt(formData.get("age") as string),
      job: formData.get("job"),
      work_experience: parseInt(formData.get("work_experience") as string),
      hobbies: formData.get("hobbies") || "",
      role: formData.get("role") || "USER",
    };

    let response = await fetch(`${Config.baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidatePath("/users");
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }
    console.log(result);
    return result;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
