import React from "react";
import { User } from "../types/userType";

const UserItem = ({ user }: { user: User }) => {
  return <li key={user.id}>{user.name}</li>;
};

export default UserItem;
