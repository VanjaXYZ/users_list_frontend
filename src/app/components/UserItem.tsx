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
  const [job, setJob] = useState(user.job);
  const [workExperience, setWorkExperience] = useState(user.work_experience);
  const [hobbies, setHobbies] = useState(user.hobbies);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age.toString());
    formData.append("job", job);
    formData.append("work_experience", workExperience.toString());
    // formData.append("hobbies", hobbies);
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
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 text-black"
            placeholder="Email"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="px-2 py-1 text-black"
            placeholder="Age"
            autoComplete="on"
          />
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="px-2 py-1 text-black"
            placeholder="Current job"
          />
          <input
            type="number"
            value={workExperience}
            onChange={(e) => setWorkExperience(Number(e.target.value))}
            className="px-2 py-1 text-black"
            placeholder="Work experience"
            autoComplete="on"
          />
          <input
            type="text"
            value={hobbies}
            onChange={(e) =>
              setHobbies((prev: string[]) => [...prev, e.target.value])
            }
            className="px-2 py-1 text-black"
            placeholder="Hobbies"
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
          <div className="flex">
            <span className="w-[200px]">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex">
            <span className="w-[200px]">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex">
            <span className="w-[200px]">Age:</span>
            <span>{user.age}</span>
          </div>
          <div className="flex">
            <span className="w-[200px]">Current job:</span>
            <span>{user.job}</span>
          </div>
          <div className="flex">
            <span className="w-[200px]">Work experience:</span>
            <span>
              {user.work_experience}{" "}
              {`${user.work_experience < 1 ? "year" : "years"}`}
            </span>
          </div>
          <div className="flex gap-2 justify-end py-2">
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
