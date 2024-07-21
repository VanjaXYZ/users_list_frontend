"use client";
import { handleDeleteUser } from "@/app/actions/deleteUser";
import { handleUpdateUser } from "@/app/actions/updateUser";
import { User } from "@/app/types/userType";
import { useState } from "react";
import { USER_ROLES } from "../(shared)/user_roles";

const UserItem = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [job, setJob] = useState(user.job);
  const [workExperience, setWorkExperience] = useState(user.work_experience);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [role, setRole] = useState(user.role);

  const handleUpdate = async () => {
    const updatedUser = {
      name,
      email,
      age,
      job,
      work_experience: workExperience,
      hobbies: hobbies,
      role: role,
    };
    await handleUpdateUser(user.id, updatedUser);
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
            className="px-2 py-1 text-black border rounded"
            placeholder="Name"
            autoComplete="on"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 text-black border rounded"
            placeholder="Email"
            autoComplete="on"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="px-2 py-1 text-black border rounded"
            placeholder="Age"
            autoComplete="on"
          />
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="px-2 py-1 text-black border rounded"
            placeholder="Current job"
          />
          <input
            type="number"
            value={workExperience}
            onChange={(e) => setWorkExperience(Number(e.target.value))}
            className="px-2 py-1 text-black border rounded"
            placeholder="Work experience"
            autoComplete="on"
          />
          <input
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            className="px-2 py-1 text-black border rounded"
            placeholder="Hobbies (separate with commas)"
            type="text"
          />
          <select
            className="px-2 py-1 text-black border rounded"
            name="role"
            value={role}
            onChange={(e: any) => setRole(e.target.value)}
            required
          >
            <option value="" disabled className="italic">
              Select role
            </option>
            {USER_ROLES.map((role: string) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <div className="flex justify-end gap-2">
            <button
              className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex">
            <span className="w-[200px] font-semibold">Role:</span>
            <span>{user.role}</span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Age:</span>
            <span>
              {user.age} {`${user.age <= 1 ? "year" : "years"}`}
            </span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Current job:</span>
            <span>{user.job}</span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Work experience:</span>
            <span>
              {user.work_experience}{" "}
              {`${user.work_experience <= 1 ? "year" : "years"}`}
            </span>
          </div>
          <div className="flex">
            <span className="w-[200px] font-semibold">Hobbies:</span>
            <span>{user.hobbies}</span>
          </div>
          <div className="flex gap-2 justify-end py-2">
            <button
              className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1"
              onClick={() => setIsEditing(true)}
            >
              Update
            </button>
            <button
              className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1"
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
