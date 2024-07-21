"use client";
import { handleSubmit } from "@/app/actions/createUser";
import { useRef } from "react";
import { USER_ROLES } from "../(shared)/user_roles";

const CreateUserForm = () => {
  const ref = useRef<HTMLFormElement>() as any;
  const onSubmit = async (formData: FormData) => {
    await handleSubmit(formData);
    ref.current.reset();
  };

  return (
    <form ref={ref} action={onSubmit}>
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
        <button
          type="submit"
          className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1 w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
