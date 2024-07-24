import { User } from "@/app/types/userType";
import FilterComponent from "../(shared)/FilterComponent";
import UserItem from "./UserItem";

const FilteredUsersList = ({ query, filter, usersList }: any) => {
  const filteredUsers = usersList?.filter((user: any) =>
    user?.[filter].toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="flex flex-col">
      <FilterComponent />
      <ul className=" divide-y-2 space-y-2">
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
