import { User } from "@/app/types/userType";
import FilterComponent from "../(shared)/FilterComponent";
import UserItem from "./UserItem";

const FilteredUsersList = ({ query, filter, usersList }: any) => {
  const filteredUsers = usersList?.filter((user: any) => {
    if (typeof user?.[filter] === "string") {
      return user?.[filter]?.toLowerCase().includes(query.toLowerCase());
    } else if (typeof user?.[filter] === "number") {
      return user?.[filter]?.toString().includes(query.toLowerCase());
    }
  });

  return (
    <div className="flex flex-col">
      <FilterComponent />
      <p className="py-2 underline">
        Total users found: <strong>{filteredUsers?.length}</strong>
      </p>
      <ul className="divide-y-2 space-y-2">
        {filteredUsers?.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
      {!filteredUsers?.length && (
        <p className="py-4 text-lg">User doesn't exists...</p>
      )}
    </div>
  );
};

export default FilteredUsersList;
