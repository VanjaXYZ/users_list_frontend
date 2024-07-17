import { getUsers } from "../actions/getUsers";
import { User } from "../types/userType";
import UserItem from "./UserItem";

const UsersList = async () => {
  const usersList = await getUsers();

  return (
    <div>
      <ul>
        {usersList?.map((user: User) => (
          <UserItem user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
