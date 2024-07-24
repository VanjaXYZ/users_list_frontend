import { LockKeyhole } from "lucide-react";
import React from "react";
import BackArrow from "./BackArrow";
import { login } from "@/app/actions/login";
import SubmitButton from "../(shared)/SubmitButton";

const LoginForm = async () => {
  return (
    <form className="w-2/3 sm:w-1/3 m-auto h-96 mt-20 p-2" action={login}>
      <BackArrow />
      <div className="flex justify-center flex-col items-center gap-4">
        <LockKeyhole size={48} />
        <h3 className="text-center text-2xl uppercase antialiased font-semibold">
          Welcome
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <input
          placeholder="Full name"
          className="px-2 py-1 text-black border rounded w-full"
          name="username"
          autoComplete="on"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-1 text-black border rounded w-full"
          name="password"
          autoComplete="on"
          required
        />
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;
