import React from "react";
import UsersList from "../components/UsersList";
import CreateUserForm from "../components/CreateUserForm";

const UsersPage = () => {
  return (
    <div className="border min-h-screen flex flex-col items-center p-12 gap-8">
      <CreateUserForm />
      <UsersList />
    </div>
  );
};

export default UsersPage;
