"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import ButtonLoading from "./(loadings)/ButtonLoading";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1 hover:bg-teal-500 w-full"
      disabled={pending}
    >
      {pending ? <ButtonLoading /> : `${children}`}
    </button>
  );
};

export default SubmitButton;
