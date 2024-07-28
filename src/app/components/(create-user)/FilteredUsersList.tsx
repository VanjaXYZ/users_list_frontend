"use client";
import { User } from "@/app/types/userType";
import FilterComponent from "../(shared)/FilterComponent";
import UserItem from "./UserItem";
import SortUsers from "../(shared)/SortUsers";
import { filterUsers } from "../../utils/filterUsers";
import { fetchUserData } from "@/app/utils/checkUserRole";
import { useEffect, useState } from "react";
import Pagination from "../(shared)/Pagination";

const FilteredUsersList = ({ query, filter, usersList, sortBy }: any) => {
  const packedData = {
    query: query,
    filter: filter,
    usersList: usersList,
    sortBy: sortBy,
  };
  const [userRole, setUserRole] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const filteredUsers = filterUsers(packedData);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetchUserData();
      setUserRole(userData);
    };
    fetchUser();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const paginatedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 flex-col sm:flex-row">
        <FilterComponent />
        <SortUsers />
      </div>
      <p className="py-2 underline">
        Total users found: <strong>{paginatedUsers?.length}</strong>
      </p>
      <ul className="divide-y-2 space-y-2">
        {paginatedUsers?.map((user: User) => (
          <UserItem user={user} key={user.id} userRole={userRole?.role} />
        ))}
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={filteredUsers?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </ul>
      {!paginatedUsers?.length && (
        <p className="py-4 text-lg">User does not exists...</p>
      )}
    </div>
  );
};

export default FilteredUsersList;
