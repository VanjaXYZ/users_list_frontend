import { getUsers } from "../../actions/getUsers";
import FilteredUsersList from "./FilteredUsersList";

const UsersList = async ({
  query,
  filter,
  currentPage,
}: {
  query: string;
  filter: string;
  currentPage: number;
}) => {
  const usersList = await getUsers();

  return (
    <div className="">
      <FilteredUsersList query={query} filter={filter} usersList={usersList} />
    </div>
  );
};

export default UsersList;
