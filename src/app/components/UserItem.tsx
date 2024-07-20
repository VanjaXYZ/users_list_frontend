"use client";
import React, { useState } from "react";
import { User } from "../types/userType";
import { handleDeleteUser } from "../actions/deleteUser";
import { handleUpdateUser } from "../actions/updateUser";

const UserItem = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age.toString());
    await handleUpdateUser(user.id, formData);
    setIsEditing(false);
  };

  return (
    <li key={user.id} className="w-full flex flex-col py-2">
      {isEditing ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-1 text-black"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 text-black"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="px-2 py-1 text-black"
          />
          <div className="flex justify-end gap-2">
            <button
              className="bg-white/20 px-2 py-1 rounded hover:bg-white/40"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="bg-white/20 px-2 py-1 rounded hover:bg-white/40"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="">{user.name}</span>
          <div className="flex gap-2 justify-end">
            <button
              className="bg-white/20 px-2 rounded hover:bg-white/40"
              onClick={() => setIsEditing(true)}
            >
              Update
            </button>
            <button
              className="bg-white/20 px-2 rounded hover:bg-white/40"
              onClick={() => handleDeleteUser(user.id)}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default UserItem;
