import SignupForm from "@/app/components/(auth)/SignupForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Signup",
};

const Page = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Page;
