import { User } from "@/app/types/userType";
import FilterComponent from "../(shared)/FilterComponent";
import UserItem from "./UserItem";
import SortUsers from "../(shared)/SortUsers";
import { filterUsers } from "../../utils/filterUsers";

const FilteredUsersList = ({ query, filter, usersList, sortBy }: any) => {
  const packedData = {
    query: query,
    filter: filter,
    usersList: usersList,
    sortBy: sortBy,
  };

  const filteredUsers = filterUsers(packedData);

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 flex-col sm:flex-row">
        <FilterComponent />
        <SortUsers />
      </div>
      <p className="py-2 underline">
        Total users found: <strong>{filteredUsers?.length}</strong>
      </p>
      <ul className="divide-y-2 space-y-2">
        {filteredUsers?.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
      {!filteredUsers?.length && (
        <p className="py-4 text-lg">User does not exists...</p>
      )}
    </div>
  );
};

export default FilteredUsersList;
