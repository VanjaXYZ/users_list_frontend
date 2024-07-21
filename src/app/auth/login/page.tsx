import LoginForm from "@/app/components/(auth)/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return <LoginForm />;
};

export default Page;
