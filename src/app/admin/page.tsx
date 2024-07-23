import React from "react";
import { fetchUserData } from "../utils/checkUserRole";

const Page = async () => {
  const user = await fetchUserData();
  return <div>Hello from Admin, Mr. {user?.name}</div>;
};

export default Page;
