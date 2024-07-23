"use client";
import { User } from "@/app/types/userType";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import FilterComponent from "../(shared)/FilterComponent";

const FilteredUsersList = ({ query, usersList }: any) => {
  const [filteredData, setFilteredData] = useState("role");

  const filteredUsers = usersList?.filter((user: any) =>
    user?.[filteredData].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <FilterComponent
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <ul className="w-full divide-y-2 space-y-2">
        {filteredUsers?.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
      {!filteredUsers?.length && "User doesn't exist..."}
    </div>
  );
};

export default FilteredUsersList;
