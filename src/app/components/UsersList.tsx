import { getUsers } from "../actions/getUsers";
import { User } from "../types/userType";
import UserItem from "./UserItem";

const UsersList = async () => {
  const usersList = await getUsers();

  return (
    <div className="w-full grid place-items-center">
      <ul className="w-2/5 divide-y-2 space-y-2">
        {usersList?.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
