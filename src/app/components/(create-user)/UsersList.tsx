"use client";
import { getUsers } from "../../actions/getUsers";
import { User } from "../../types/userType";
import FilteredUsersList from "./FilteredUsersList";
import React, { useState, useEffect } from "react";

const UsersList = ({ query }: { query: string }) => {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsersList(users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full grid place-items-center">
      <FilteredUsersList query={query} usersList={usersList} />
    </div>
  );
};

export default UsersList;
