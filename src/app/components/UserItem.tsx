"use client";
import React from "react";
import { User } from "../types/userType";
import { handleDeleteUser } from "../actions/deleteUser";

const UserItem = ({ user }: { user: User }) => {
  return (
    <li key={user.id} className="w-full flex justify-between py-2">
      {user.name}{" "}
      <button
        className="bg-white/20 px-2 py-1 hover:bg-white/40"
        onClick={() => handleDeleteUser(user.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default UserItem;
