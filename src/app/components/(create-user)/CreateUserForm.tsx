"use client";
import { useRef } from "react";
import { USER_ROLES } from "../(shared)/user_roles";
import LogoutButton from "../(auth)/LoggoutButton";
import { handleCreateUser } from "@/app/actions/createUser";
import SubmitButton from "../(shared)/SubmitButton";

const CreateUserForm = () => {
  const ref = useRef<HTMLFormElement>() as any;
  const onSubmit = async (formData: FormData) => {
    await handleCreateUser(formData);
    ref.current.reset();
  };

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <LogoutButton />
      </div>
      <form ref={ref} action={onSubmit}>
        <h3 className="font-semibold text-xl w-full text-black text-center pb-2">
          Add New User
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-2 py-1 text-black border rounded"
            autoComplete="on"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-2 py-1 text-black border rounded"
            autoComplete="on"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="px-2 py-1 text-black border rounded"
            autoComplete="on"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="px-2 py-1 text-black border rounded"
            autoComplete="on"
            required
          />
          <input
            type="text"
            name="job"
            placeholder="Current job"
            className="px-2 py-1 text-black border rounded"
            required
          />
          <input
            type="number"
            name="work_experience"
            placeholder="Work experience"
            className="px-2 py-1 text-black border rounded"
            autoComplete="on"
            required
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Hobbies"
            className="px-2 py-1 text-black border rounded"
          />
          <select
            className="px-2 py-1 text-black border rounded"
            name="role"
            defaultValue={""}
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
        </div>
        <div className="py-2">
          <SubmitButton>Submit</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
