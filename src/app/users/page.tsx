import React from "react";
import UsersList from "../components/(create-user)/UsersList";
import CreateUserForm from "../components/(create-user)/CreateUserForm";
import { Metadata } from "next";

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
