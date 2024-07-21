"use client";
import { useRef } from "react";
import { handleSubmit } from "../actions/createUser";

const CreateUserForm = () => {
  const ref = useRef<HTMLFormElement>() as any;
  const onSubmit = async (formData: FormData) => {
    await handleSubmit(formData);
    ref.current.reset();
  };
  return (
    <form ref={ref} className="grid grid-cols-2 gap-4" action={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="px-2 py-1 text-black"
        autoComplete="on"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="px-2 py-1 text-black"
        autoComplete="on"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="px-2 py-1 text-black"
        autoComplete="on"
      />
      <input
        type="text"
        name="job"
        placeholder="Current job"
        className="px-2 py-1 text-black"
      />
      <input
        type="number"
        name="work_experience"
        placeholder="Work experience"
        className="px-2 py-1 text-black"
        autoComplete="on"
      />
      <input
        type="text"
        name="hobbies"
        placeholder="Hobbies"
        className="px-2 py-1 text-black"
      />
      <button type="submit" className="bg-white/20 rounded hover:bg-white/40">
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
