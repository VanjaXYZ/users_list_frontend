"use server";
import { Config } from "../../../Config";

export const getUsers = async () => {
  try {
    let response = await fetch(`${Config.baseUrl}/users`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
