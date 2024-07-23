import { handleRegisterUser } from "@/app/actions/createUser";
import { LockKeyhole } from "lucide-react";
import BackArrow from "./BackArrow";
import { redirect } from "next/navigation";

const SignupForm = () => {
  const registerUser = async (formData: FormData) => {
    "use server";
    const register = await handleRegisterUser(formData);
    if (register.success) {
      redirect("/auth/login");
    }
  };
  return (
    <form className="w-1/3 m-auto h-96 mt-20 py-2" action={registerUser}>
      <BackArrow />
      <div className="flex justify-center flex-col items-center gap-4">
        <LockKeyhole size={48} />
        <h3 className="text-center text-2xl uppercase antialiased font-semibold">
          Welcome
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-2 py-4">
        <input
          type="text"
          placeholder="Full name"
          className="px-2 py-1 text-black border rounded"
          name="name"
          autoComplete="on"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-1 text-black border rounded"
          name="password"
          autoComplete="on"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="px-2 py-1 text-black border rounded"
          name="email"
          autoComplete="on"
          required
        />
        <input
          type="number"
          placeholder="Age"
          className="px-2 py-1 text-black border rounded"
          name="age"
          autoComplete="on"
          required
        />
        <input
          type="text"
          placeholder="Job"
          className="px-2 py-1 text-black border rounded"
          name="job"
          autoComplete="on"
          required
        />
        <input
          type="number"
          placeholder="Work experience"
          className="px-2 py-1 text-black border rounded"
          name="work_experience"
          autoComplete="on"
          required
        />
      </div>
      <button
        type="submit"
        className="border rounded bg-teal-700 text-white font-bold uppercase tracking-widest px-4 py-1 hover:bg-teal-500 w-full"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
