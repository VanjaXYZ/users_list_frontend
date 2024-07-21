import { LockKeyhole } from "lucide-react";
import React from "react";

const LoginForm = () => {
  return (
    <form className="w-1/3 m-auto h-96 mt-20 py-2">
      <div className="flex justify-center flex-col items-center gap-4">
        <LockKeyhole size={48} />
        <h3 className="text-center text-2xl uppercase antialiased font-semibold">
          Welcome
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <input
          placeholder="Full name"
          className="px-2 py-1 text-black border rounded"
          name="name"
          autoComplete="on"
          required
        />
        <input
          type="password"
          placeholder="*********"
          className="px-2 py-1 text-black border rounded"
          name="password"
          autoComplete="on"
          required
        />
        <button
          type="submit"
          className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1 hover:bg-teal-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
