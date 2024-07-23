import { getUsers } from "../../actions/getUsers";
import FilteredUsersList from "./FilteredUsersList";

const UsersList = async ({
  query,
  filter,
}: {
  query: string;
  filter: string;
}) => {
  const usersList = await getUsers();

  return (
    <div className="">
      <FilteredUsersList query={query} filter={filter} usersList={usersList} />
    </div>
  );
};

export default UsersList;
