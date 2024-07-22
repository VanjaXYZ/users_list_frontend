import React from "react";
import { Metadata } from "next";
import CreateUserForm from "@/app/components/(create-user)/CreateUserForm";
import UsersList from "@/app/components/(create-user)/UsersList";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = () => {
  return (
    <div className="flex flex-col items-center p-12 gap-8 w-full">
      <CreateUserForm />
      <UsersList />
    </div>
  );
};

export default UsersPage;
