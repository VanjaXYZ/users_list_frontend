import { getUsers } from "../../actions/getUsers";
import { User } from "../../types/userType";
import UserItem from "./UserItem";

const UsersList = async ({ query }: { query: string }) => {
  const usersList = await getUsers();

  const filteredUsers = usersList?.filter((user: User) =>
    user?.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full grid place-items-center">
      <ul className="w-2/5 divide-y-2 space-y-2">
        {filteredUsers?.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
      {!filteredUsers?.length && "User doesn't exists..."}
    </div>
  );
};

export default UsersList;
